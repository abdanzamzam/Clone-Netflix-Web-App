const express = require("express");
const MovieController = require("../controllers/movieController");
const routes = express.Router();

routes.get("/", MovieController.getAll);
routes.get("/:id", MovieController.getOne);
routes.post("/add", MovieController.createData);
routes.put("/update/:id", MovieController.updateData);
routes.delete("/delete/:id", MovieController.deleteData);

module.exports = routes;
