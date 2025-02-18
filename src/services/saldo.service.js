import { Saldo } from "../models/Saldo.js"

export const saldoService = () => Saldo.findOne()

export const resetarSaldoService = (id) => Saldo.update({valor: 0}, {where: {id}})