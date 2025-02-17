import { createService } from "../services/admin.service.js";
import bcrypt from "bcrypt"


const create = async (req, res) => {
  const { user_name, email, senha, confirmSenha } = req.body;

  if (!user_name) return res.status(400).send({ message: "Username é obrigatório" });
  if (!email) return res.status(400).send({ message: "Email é obrigatório" });
  if (!senha) return res.status(400).send({ message: "Senha é obrigatória" });
  if (senha !== confirmSenha) return res.status(400).send({ message: "Senhas não combinam" });

  try {
    const salt = await bcrypt.genSalt(12)
    const hashSenha = await bcrypt.hash(senha, salt)

    const administrador = await createService(user_name, email, hashSenha)
    if(!administrador) return res.status(400).send({ message: "Erro ao criar Administrador" });

    return res.status(201).send({
        message: "Administrador criado com sucesso",
        Administrador: {
            user_name, email
        }
    })

  } catch (err) {
    res.status(500).send({ message: "Erro no server", err});
  }
};


export { create };
