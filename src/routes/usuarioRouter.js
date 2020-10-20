const express = require("express");
const UsuarioController = require("../controllers/UsuarioController");

const usuarioRouter = express.Router();
usuarioRouter.post("/", UsuarioController.store);
module.exports = usuarioRouter;