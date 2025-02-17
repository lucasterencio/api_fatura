import dotenv from "dotenv"
import { Sequelize } from "sequelize"
dotenv.config()

export const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,

    {
        dialect: "mysql",
        host: process.env.DB_HOST
    }
)

sequelize.authenticate()
.then(() =>{
    console.log("Conectado ao Mysql")
    return sequelize.sync()
})
.catch((err) =>{
    console.error("Nao foi possivel se conectar", err)
})