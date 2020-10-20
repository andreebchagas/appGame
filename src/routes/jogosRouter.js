const express = require("express");
const JogosController = require("../controllers/JogosController");

const jogosRouter = express.Router();

jogosRouter.get("/", JogosController.index);
jogosRouter.get("/:id", JogosController.show);
jogosRouter.post("/", JogosController.store);
jogosRouter.delete("/:id", JogosController.destroy);
jogosRouter.put("/:id",JogosController.update);

module.exports = jogosRouter;