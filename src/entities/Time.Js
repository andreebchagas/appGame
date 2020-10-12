const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/db");

class Time extends Model{};

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
    tableName: "times"
});

Time.belongsToMany(Jogo,{
    through: Time,
    foreignKey: id,
})

module.exports = Time;