
const MoviesModel = require("./database/movieschema");
const UserModel = require("./database/userschema");
const express = require("express");
require("dotenv").config();


const app = express();
var cors = require("cors");
app.use(cors());
app.use(express.json());

var mongoose = require("mongoose");



var mongoDB = process.env.MONGODB_URI;

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("CONNECTION ESTABLISHED"));

app.get("/", (req, res) => {


    return res.json("welcome to book-my-show page");
});

http://localhost:3000/books
app.get("/movies", async (req, res) => {
    const getAllMovies = await MoviesModel.find();
    return res.json(getAllMovies);
});

app.get("/movie/:id", async (req, res) => {
    const { id } = req.params;
    const getMovie = await MoviesModel.findOne({ id: id });
    return res.json(getMovie);
})

app.post("/user-register", async (req, res) => {
    const addNewUser = await UserModel.create(req.body);
    return res.json({
        users: addNewUser,
        message: "User was added!!!",
    });
});


app.listen(5000, () => {
    console.log("MY express app is running.........");
})