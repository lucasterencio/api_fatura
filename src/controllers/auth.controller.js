import bcrypt from "bcrypt"

import { findAdm, gerarToken } from "../services/auth.service.js";

const login = async(req, res) =>{
    const { email, senha } = req.body

    if (!email) return res.status(400).send({ message: "Email é obrigatório" });
    if (!senha) return res.status(400).send({ message: "Senha é obrigatória" });

    try{
        const administrador = await findAdm(email)
        if(!administrador) return res.status(404).send({message: "Administrador não existe"})
        const idAdm = administrador.id
        
        const senhaValida = await bcrypt.compare(senha, administrador.senha)

        if(!senhaValida || !administrador) return res.status(404).send({message: "Email ou senha nao combinam"})

        const token = gerarToken(idAdm)
        

        res.status(200).send({token})

    }   catch (err) {
        res.status(500).send({ message: "Erro no server", err});
      }

}



export { login }