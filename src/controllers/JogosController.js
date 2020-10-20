const  { v4: uuidv4 } = require("uuid");
const Time = require("../entities/Time");
const Jogo = require("../entities/Jogo");
const { Op } = require("sequelize");



class JogosController{

    async index(req,res){
        const result = await Jogo.findAll();
        res.json(result);
    }

    async show(req,res){
        const {id} = req.params;
        const result = await Jogo.findByPk(id);

        if(result){
            res.json(result);
        }else{
            res.sendStatus(404);
        }
    }

    async store(req,res){
        
        const {id_time_mandante, id_time_visitante, data_realizacao} = req.body;
        const countJogo = await Jogo.count({
            where:{
                data_realizacao,
                [Op.or] : [
                    {
                        id_time_mandante:{
                            [Op.eq] : id_time_mandante,
                        },
                    },
                    {
                        id_time_visitante:{
                            [Op.eq]: id_time_visitante
                        },
                    },
                ]
            },
        });

        if(countJogo > 0){
            throw new Error("Algum dos times já possui jogo marcado para essa data.");
        }

        const newID = uuidv4();

        await Time.create({id:newID, id_time_mandante, id_time_visitante, data_realizacao});

        res.send();
    }

 async update(req,res) {
    const {id} = req.params;
    const{id_time_mandante, id_time_visitante, data_realizacao} = req.body;
    const jogo = await Jogo.findByPk(id);

    const countJogo = await Jogo.count({
        where:{
            data_realizacao,
            [Op.or] : [
                {
                    id_time_mandante:{
                        [Op.eq] : id_time_mandante,
                    },
                },
                {
                    id_time_visitante:{
                        [Op.eq]: id_time_visitante
                    },
                },
            ]
        },
    });

    if(jogo){
        await Jogo.update(
            {
                id_time_mandante,
                id_time_visitante,
                data_realizacao,
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

    Jogo.update
 }
    async destroy(req, res) {
        const { id } = req.params;
    
        const jogo = await Jogo.findByPk(id);

        if(jogo){
            await jogo.destroy();
            res.send();
        }else{
            res.sendStatus(404); 
        }
    }
 }

module.exports = new JogosController();