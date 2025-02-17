import express from "express"
import { sequelize } from "./config/database.js"

import adminRoute from "./src/routes/adminRoute.js"

const app = express()
const port = process.env.PORT || 6000

app.use(express.json())

app.use("/admin", adminRoute)

sequelize.sync()
.then(() => app.listen(port, () => console.log(`Banco sincronizado em http://localhost:${port}`)))
.catch((err) => console.log("Erro ao sicronizar banco", err))

