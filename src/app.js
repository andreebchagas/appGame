require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
const sequelize = require("./config/db");
const usuariosRouter = require("./routes/usuarioRouter");
const timesRouter = require("./routes/timesRouter");
const jogosRouter = require("./routes/jogosRouter");
const jogadorRouter = require("./routes/jogadorRouter")
const authRouter = require("./routes/authRouter");

sequelize.sync({ alter: true });

app.use(express.json());


app.use("/times", timesRouter);
app.use("/usuarios", usuariosRouter);
app.use("/jogos", jogosRouter);
app.use("/jogador", jogadorRouter);
app.use("/auth", authRouter);

app.listen("3000", ()=>{
    console.log("Servidor iniciou na porta 3000");
});