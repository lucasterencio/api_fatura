import { Credor } from "../models/Credor.js"

export  const createService = (nome, telefone) => Credor.create({nome, telefone})

export const listarService = () => Credor.findAll()