const express = require("express");
const JogadorController = require("../controllers/JogadorController");

const jogadorRouter = express.Router();

jogadorRouter.get("/", JogadorController.index);
jogadorRouter.get("/:id", JogadorController.show);
jogadorRouter.post("/", JogadorController.store);
jogadorRouter.delete("/:id", JogadorController.destroy);
jogadorRouter.put("/:id",JogadorController.update);

module.exports = jogadorRouter;