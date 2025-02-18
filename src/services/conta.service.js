import { Conta } from "../models/Conta.js"
import { Credor } from "../models/Credor.js"
import { Saldo } from "../models/Saldo.js"

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

export const listarDividaById = (id) => Conta.findOne({where: {id}})

export const atualizarParcelaService = (id, parcelas) => Conta.update({parcelas:parcelas}, {where: {id}})

export const saldoService = () => Saldo.findAll()