const {DataTypes, Model} = require("sequelize");
const sequelize = require("../config/db");
const Time = require("./Time.Js");

const Jogo = sequelize.define(
    "Jogo",
    {
        id_time_mandante: {
            types: DataTypes.STRING,
            primaryKey:true,
            references: {
                model: Time,
                key: "id",
            },
        },
        id_time_visitante: {
            types: DataTypes.STRING,
            primaryKey:true,
            references: {
                model: Time,
                key: "id",
            },
        },
    },
    {tableName: "jogos", timestamps:false}
);

Jogo.belongsToMany(Time,{
    through: Jogo,
    foreignKey: id_time_mandante,id_time_visitante,
})

module.exports = Jogo;