import { Credor } from "../models/Credor.js"
import { Conta } from "../models/Conta.js"

export  const createService = (nome, telefone) => Credor.create({nome, telefone})

export const listarService = () => Credor.findAll()

export const listarById = (id) => Credor.findOne({where: {id}})

export const criarDividaService = (estabelecimento, data_compra, parcelas, valor, credor_id) => Conta.create({
    estabelecimento,
    data_compra,
    parcelas,
    valor,
    status: "Pendente",
    credor_id
})

export const listarDividasService = () => Conta.findAll({include: [{
    model: Credor,
    attributes: ["nome", "telefone"]
}]})

export const listarDividasByIdService = (id) => Conta.findAll({where: {credor_id:id}, include: [{
    model: Credor,
    attributes: ["nome", "telefone"]
}]})