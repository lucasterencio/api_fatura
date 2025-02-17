import { createService, listarService } from "../services/credor.service.js";


const create = async(req, res) =>{
    const { nome, telefone } = req.body

    if(!nome) return res.status(400).send({ message: "Nome é obrigatório" });
    if(!telefone) return res.status(400).send({ message: "Telefone é obrigatório" });
    if(telefone.length != 9) return res.status(400).send({message: "Telefone inválido"})

    try{
        const credor =  createService(nome, telefone) 
        if(!credor) return res.status(400).send({message: "Erro ao criar o credor"})

        res.status(201).send({
            credor: {
                nome, telefone
            }
        })

    }   catch (err) {
        res.status(500).send({ message: "Erro no server", err});
      }

    
}

const listarCredores = async(req, res) =>{
    try{
        const credores = await listarService()
        if(credores.length === 0) return res.status(400).send({message: "Não existe credores"})
        
        res.status(200).send({credores})

    } catch (err) {
        res.status(500).send({ message: "Erro no server", err});
    }
}


export { create, listarCredores }