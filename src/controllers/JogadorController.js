const  { v4: uuidv4 } = require("uuid");
const Jogador = require("../entities/Jogador");

class JogadorController {

    async index(req,res){
        const result = await Jogador.findAll();
        res.json(result);
    }

    async show(req,res){
        const {id} = req.params;
        const result = await Jogador.findByPk(id);

        if(result){
            res.json(result);
        }else{
            res.sendStatus(404);
        }
    }

    async store(req,res){
        
        const {nome, apelido, time} = req.body;

        const newID = uuidv4();

        await Jogador.create({id:newID, nome, apelido, time});

        res.send();
    }

 async update(req,res) {
    const {id} = req.params;
    const{nome, apelido, time} = req.body;
    const jogador = await Jogador.findByPk(id);

        if(jogador){
            await Jogador.update(
                {
                    nome,
                    apelido,
                    time,
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
    
        const jogador = await Jogador.findByPk(id);

        if(jogador){
            await jogador.destroy();
            res.send();
        }else{
            res.sendStatus(404); 
        }
    }
 }

module.exports = new JogadorController();