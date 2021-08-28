const express = require("express");
const movies = require("./movies");
const tvseries = require("./tvseries");
const routes = express.Router();

routes.use("/movies", movies);
routes.use("/tvseries", tvseries);

routes.get("/", (req, res) => {
  res.send("halo guuys");
});

module.exports = routes;
