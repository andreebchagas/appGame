const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/db");
const Jogador = require("./Jogador");

class Time extends Model{}

Time.init({
    id:{
        type: DataTypes.STRING,
        primaryKey:true,
    },
    nome: DataTypes.STRING,
    localizacao: DataTypes.STRING,
},
{
    sequelize,
    modelName: "Time",
    tableName: "times",
});

module.exports = Time;