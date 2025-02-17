import { Credor } from "../models/Credor.js"


export  const createService = (nome, telefone) => Credor.create({nome, telefone})

export const listarService = () => Credor.findAll()

export const listarById = (id) => Credor.findOne({where: {id}})

