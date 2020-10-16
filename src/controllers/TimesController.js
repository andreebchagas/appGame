const  { v4: uuidv4 } = require("uuid");
const Jogador = require("../entities/Jogador");
const Usuario = require("../entities/Usuario");
const Time = require("../entities/Time");
const Jogo = require("../entities/Jogo");
const { Op } = require("sequelize");



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

 async update(req,res) {
    const {id} = req.params;
    const{nome, localizacao} = req.body;
    const time = await Time.findByPk(id);

        if(time){
            const countByLocalizacao = await Time.count({
                where:{
                    localizacao,
                    id:{
                        [Op.ne] : id,
                    },
                },
            });
            if(countByLocalizacao > 0){
                throw new Error("Já existe time com essa localização."); 
            }
            
            await Time.update(
                {
                    nome,
                    localizacao,
                },
                {
                    where:{
                        id,
                    },
                }
            );
            res.send();
        }else{
            res.sendStatus(404);
        }
    }

    async destroy(req, res) {
        const { id } = req.params;
    
        const time = await Time.findByPk(id);

        if(time){
            await time.destroy();
            res.send();
        }else{
            res.sendStatus(404); 
        }
    }
 }

module.exports = new TimeController();