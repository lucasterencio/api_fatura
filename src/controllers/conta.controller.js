import { criarDividaService, 
         listarDividasService, 
         listarDividasByIdService, 
         listarDividaById,
         atualizarParcelaService,
         atualizarStatusService,
         resetarStatusService,
        } from "../services/conta.service.js";

import { autualizarParcelaFunction } from "./atualizarParcela.js";


export const criarDivida = async(req, res) =>{
    const { estabelecimento, data_compra, parcelas, valor } = req.body
    // const credorId = req.credorId
    const { id } = req.params

    if(!estabelecimento) return res.status(400).send({ message: "Estabelecimento é obrigatório" });
    if(!data_compra) return res.status(400).send({ message: "A data da compra é obrigatória" });
    if(!parcelas) return res.status(400).send({ message: "Informe as parcelas da compra" });
    if(!valor) return res.status(400).send({ message: "Informe o valor da compra" });

    try{
        const divida = await criarDividaService(estabelecimento, data_compra, parcelas, valor, id)

        if(!divida) return res.status(400).send({message: "Erro ao criar a divida"})


        res.status(201).send({divida})
    } catch (err) {
        res.status(500).send({ message: "Erro no server", err});
    }

    
}

export const listarDividas = async(req, res) =>{
    try{
        const dividas = await listarDividasService()

        res.status(200).send({dividas})
    } catch (err) {
        res.status(500).send({ message: "Erro no server", err});
    }
}

export const listarDividasByCredor = async(req, res) =>{
    const { idCredor } = req.params

    try{
        const dividas = await listarDividasByIdService(idCredor)
        res.send({dividas})
    } catch (err) {
        res.status(500).send({ message: "Erro no server", err});
    }

}

export const autualizarParcela = async(req, res) =>{
    const divida = req.divida
    const idDivida = req.idDivida
 

    try{
        const novaParcela = await autualizarParcelaFunction(divida.parcelas)
        await atualizarParcelaService(idDivida, novaParcela)
        const dividaAtualizada = await listarDividaById(idDivida)


        res.send({message: "Parcelas atualizadas", dividaAtualizada})
    } catch (err) {
        res.status(500).send({ message: "Erro no server", err});
    }
}

export const alterarStatus = async(req, res) =>{
    const { id } = req.params

    try{
        await atualizarStatusService(id)
        res.status(200).send({message: "Status alterado"})
    } catch (err) {
        res.status(500).send({ message: "Erro no server", err});
    }
}
export const resetarStatus = async(req, res) =>{

    try{
        await resetarStatusService()
        res.status(200).send({message: "Todos os status voltaram ao padrao"})
    } catch (err) {
        res.status(500).send({ message: "Erro no server", err});
    }
}
