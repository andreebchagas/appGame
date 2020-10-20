const {DataTypes, Model} = require("sequelize");
const sequelize = require("../config/db");
const Time = require("./Time");

const Jogo = sequelize.define(
    "Jogo",
    {
        id_time_mandante: {
            type: DataTypes.STRING,
            primaryKey:true,
            references: {
                model: Time,
                key: "id",
            },
        },
        id_time_visitante: {
            type: DataTypes.STRING,
            primaryKey:true,
            references: {
                model: Time,
                key: "id",
            },
        },
        data_realizacao:{
            type: DataTypes.DATEONLY,
            primaryKey:true,
        },
    },
    {tableName: "jogos", timestamps:false},
);

module.exports = Jogo;