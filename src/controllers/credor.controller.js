import { createService, listarService, criarDividaService, listarDividasService } from "../services/credor.service.js";


const create = async(req, res) =>{
    const { nome, telefone } = req.body

    if(!nome) return res.status(400).send({ message: "Nome é obrigatório" });
    if(!telefone) return res.status(400).send({ message: "Telefone é obrigatório" });
    if(telefone.length != 9) return res.status(400).send({message: "Telefone inválido"})

    try{
        const credor =  createService(nome, telefone) 
        if(!credor) return res.status(400).send({message: "Erro ao criar o credor"})

        res.status(201).send({
            credor: {
                nome, telefone
            }
        })

    }   catch (err) {
        res.status(500).send({ message: "Erro no server", err});
      }

    
}

const listarCredores = async(req, res) =>{
    try{
        const credores = await listarService()
        if(credores.length === 0) return res.status(400).send({message: "Não existe credores"})
        
        res.status(200).send({credores})

    } catch (err) {
        res.status(500).send({ message: "Erro no server", err});
    }
}

const criarDivida = async(req, res) =>{
    const { estabelecimento, data_compra, parcelas, valor } = req.body
    const credorId = req.credorId

    if(!estabelecimento) return res.status(400).send({ message: "Estabelecimento é obrigatório" });
    if(!data_compra) return res.status(400).send({ message: "A data da compra é obrigatória" });
    if(!parcelas) return res.status(400).send({ message: "Informe as parcelas da compra" });
    if(!valor) return res.status(400).send({ message: "Informe o valor da compra" });

    try{
        const divida = await criarDividaService(estabelecimento, data_compra, parcelas, valor, credorId)

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


export { create, listarCredores, criarDivida, listarDividas }