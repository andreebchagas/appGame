require("dotenv").config();
const express = require("express");
const app = express();
const sequelize = require("./config/db");
const timesRouter = require("./routes/timesRouter.js");
const Jogador = require("../src/entities/Jogador");
const Usuario = require("../src/entities/Usuario");

sequelize.sync({ force: true });

app.use("/times", timesRouter);

app.listen("3000", ()=>{
    console.log("Servidor iniciou na porta 3000");
});