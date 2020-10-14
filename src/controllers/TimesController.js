const  { v4: uuidv4 } = require("uuid");
const Time = require("../entities/Time");


class TimeController{

    async index(req,res){
        const result = await Time.findAll();
        res.json(result);
    }

    async show(req,res){
        const {id} = req.params;
        const result = await Time.findByPk(id);

        if(result){
            res.json(result);
        }else{
            res.sendStatus(404);
        }
    }

    async store(req,res){
        const {nome, localizacao} = req.body;
        const countTime = await Time.count({
            where:{
                nome,
            },
        });

        if(countTime > 0){
            throw new Error("Time já cadastrado");
        }

        const newID = uuidv4();

        await Time.create({id:newID, nome, localizacao});

        res.send();
    }
}

module.exports = new TimeController();