import express from "express"
import { sequelize } from "./config/database.js"

import adminRoute from "./src/routes/adminRoute.js"
import credorRoute from "./src/routes/credorRoute.js"
import "./src/models/associations.js"

const app = express()
const port = process.env.PORT || 6000

app.use(express.json())

app.use("/admin", adminRoute)
app.use("/credor", credorRoute)

sequelize.sync()
.then(() => app.listen(port, () => console.log(`Banco sincronizado em http://localhost:${port}`)))
.catch((err) => console.log("Erro ao sicronizar banco", err))

