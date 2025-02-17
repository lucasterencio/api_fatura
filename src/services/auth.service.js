import dotenv from "dotenv"
import jwt from "jsonwebtoken"
import { Administrador } from "../models/Administrador.js";
dotenv.config()


export const findAdm = (email) => Administrador.findOne({where: {email}})

export const gerarToken = (id) => jwt.sign({id:id}, process.env.SECRET, {expiresIn: 360})