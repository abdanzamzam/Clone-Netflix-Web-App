const express = require("express");
const TvserisController = require("../controllers/tvserisController");
const tvseries = express.Router();

tvseries.get("/", TvserisController.getAll);
tvseries.get("/:id", TvserisController.getOne);
tvseries.post("/add", TvserisController.createData);
tvseries.put("/update/:id", TvserisController.updateData);
tvseries.delete("/delete/:id", TvserisController.deleteData);

module.exports = tvseries;
