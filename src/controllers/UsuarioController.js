const  { v4: uuidv4 } = require("uuid");
const Usuario = require("../entities/Usuario");
const { Op } = require("sequelize");

class UsuarioController{

    async store(req,res){
        const {nome, email, senha} = req.body;
        const countUsuario = await Usuario.count({
            where:{email,},
        })

        if(countUsuario > 0){
            throw Error("Email do Usuário cadastrado.")
        }

        const newID = uuidv4();

        await Usuario.create({id:newID, nome, email, senha});

        res.send();
    }
}

module.exports = new UsuarioController();