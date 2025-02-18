import { listarDividaById } from "../services/conta.service.js"
import { saldoService, resetarSaldoService } from "../services/saldo.service.js"



export const pagar = async(req, res) =>{
    const { id } = req.params
    

    try{
        
        const divida = await listarDividaById(id)
        const valor = divida.valor

        const saldo = await saldoService()
        await saldo.increment("valor", {by: valor})
        await saldo.reload()

        res.status(200).send({saldo})
    } catch (err) {
        res.status(500).send({ message: "Erro no server", err});
    }
}

export const resetarSaldo = async(req, res) =>{
    
    try{  
        const saldo = await saldoService()
        const id = saldo.id

        await resetarSaldoService(id)

        res.status(200).send({message: "Saldo resetado com sucesso"})
    } catch (err) {
        res.status(500).send({ message: "Erro no server", err});
    }
}

