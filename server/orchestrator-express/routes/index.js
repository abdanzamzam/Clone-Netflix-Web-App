const { default: axios } = require("axios");
const express = require("express");
const MainController = require("../controllers/mainController");
const movies = require("./movies");
const tvseries = require("./tvseries");
const routes = express.Router();

routes.use("/movies", movies);
routes.use("/tvseries", tvseries);
routes.get("/", MainController.getAll);

module.exports = routes;
