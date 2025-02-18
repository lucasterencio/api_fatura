import { listarDividaById, deletarContaService } from "../services/conta.service.js"

export const parcelaMiddleware = async(req, res, next) =>{
    try{
        const { id } = req.params

        const divida = await listarDividaById(id)
        if(!divida) return res.status(400).send({message: "Divida nao existe"})

        req.divida = divida
        req.idDivida = id

        const partesParcela = divida.parcelas
        let [parcelaAtual, parcelaFinal] = partesParcela.split("/").map(Number)


        if(parcelaAtual === parcelaFinal){
            await deletarContaService(id)
            return res.send({message: "Parcelas acabaram"})
        }
        
        next()

    } catch (err) {
        res.status(500).send(err.message);
    }
}