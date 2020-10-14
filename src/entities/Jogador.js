const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/db");
const Time = require("./Time");

class Jogador extends Model{}

Jogador.init({
    id:{
        type: DataTypes.STRING,
        primaryKey:true,
    },
    nome: DataTypes.STRING,
    apelido: DataTypes.STRING,
},
    {
    sequelize,
    modelName: "Jogador",
    tableName: "jogadores",
});
Jogador.belongsTo(Time);

module.exports = Jogador;