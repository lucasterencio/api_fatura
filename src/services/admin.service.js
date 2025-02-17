import { Administrador } from "../models/Administrador.js"


export const createService = (user_name, email, senha) => Administrador.create({user_name, email, senha})

