import { listarById } from "../services/credor.service.js";

export const credorMiddleware = async(req, res, next) =>{
    try{
        const { id } = req.params
        const credor = await listarById(id)

        if(!credor) return res.status(404).send({message: "Credor nao encontrado"})

        req.credorId = credor.id

        next()
    }   catch (err) {
        res.status(500).send(err.message);
    }
}