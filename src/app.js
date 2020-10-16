require("dotenv").config();
const express = require("express");
const app = express();
const sequelize = require("./config/db");
const timesRouter = require("./routes/timesRouter.js");

sequelize.sync({ force: true });

app.use(express.json());


app.use("/times", timesRouter);

app.listen("3000", ()=>{
    console.log("Servidor iniciou na porta 3000");
});