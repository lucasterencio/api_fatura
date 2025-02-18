import { Conta } from "../models/Conta.js"
import { Credor } from "../models/Credor.js"

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

export const atualizarStatusService = (id) => Conta.update({status: "Pago"}, {where: {id}}) 
export const resetarStatusService = () => Conta.update({status: "Pendente"}, {where: {}}) 

export const deletarContaService = (id) => Conta.destroy({where: {id}})

