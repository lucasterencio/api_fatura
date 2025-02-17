import dotenv from "dotenv"
import jwt from "jsonwebtoken"
import { findByIdService } from "../services/admin.service.js"
dotenv.config()

export const authMiddleware = (req, res, next) =>{
    try{
        const { authorization } = req.headers

        if(!authorization) return res.status(401).send({message: "Envie um token valdio"})
    
        const partsToken = authorization.split(" ")
        const [schema, token] = partsToken
        console.log(token)
    
        if(partsToken.length !== 2) return res.send(401)
    
        if(schema != "Bearer") return res.send(401)
    
        
        jwt.verify(token, process.env.SECRET, async(error, decoded) =>{
            if(error) return res.status(401).send({message: "Token invalido"})
    
            const administrador = await findByIdService(decoded.id)
    
            if(!administrador || !administrador.id) return res.status(401).send({message: "Token invalido"})
    
            return next()
        })

    }   catch (err) {
        res.status(500).send(err.message);
        }
}