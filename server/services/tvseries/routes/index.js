const express = require("express");
const TvserisController = require("../controllers/tvserisController");
const routes = express.Router();

routes.get("/", TvserisController.getAll);
routes.get("/:id", TvserisController.getOne);
routes.post("/add", TvserisController.createData);
routes.put("/update/:id", TvserisController.updateData);
routes.delete("/delete/:id", TvserisController.deleteData);

module.exports = routes;
