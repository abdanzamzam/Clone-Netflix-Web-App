const express = require("express");
const MovieController = require("../controllers/movieController");
const movies = express.Router();

movies.get("/", MovieController.getAll);
movies.get("/:id", MovieController.getOne);
movies.post("/add", MovieController.createData);
movies.put("/update/:id", MovieController.updateData);
movies.delete("/delete/:id", MovieController.deleteData);

module.exports = movies;
