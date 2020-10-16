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

Time.hasMany(Jogador, { foreignKey: "id_time" });
Jogador.belongsTo(Time, { foreignKey: "id_time" });

module.exports = Jogador;