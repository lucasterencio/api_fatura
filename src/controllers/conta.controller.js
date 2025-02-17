import { criarDividaService, listarDividasService, listarDividasByIdService, listarDividaById } from "../services/conta.service.js";


const criarDivida = async(req, res) =>{
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

const listarDividas = async(req, res) =>{
    try{
        const dividas = await listarDividasService()

        res.status(200).send({dividas})
    } catch (err) {
        res.status(500).send({ message: "Erro no server", err});
    }
}

const listarDividasByCredor = async(req, res) =>{
    const { idCredor } = req.params

    try{
        const dividas = await listarDividasByIdService(idCredor)
        res.send({dividas})
    } catch (err) {
        res.status(500).send({ message: "Erro no server", err});
    }

}

const pagar = async(req, res) =>{
    const { idDivida } = req.params

    try{

        const divida = await listarDividaById(idDivida)
        res.send({divida})


    } catch (err) {
        res.status(500).send({ message: "Erro no server", err});
    }
}



export { criarDivida, listarDividas, listarDividasByCredor, pagar }