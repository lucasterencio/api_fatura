import express from "express"
import { sequelize } from "./config/database.js"

import adminRoute from "./src/routes/adminRoute.js"
import credorRoute from "./src/routes/credorRoute.js"
import contaRoute from "./src/routes/contaRoute.js"
import saldoRoute from "./src/routes/saldoRoute.js"
import { authMiddleware } from "./src/middlewares/auth.middleware.js"
import "./src/models/associations.js"

const app = express()
const port = process.env.PORT || 6000

app.use(express.json())

app.use("/admin", adminRoute)
app.use(authMiddleware)
app.use("/credor", credorRoute)
app.use("/conta", contaRoute)
app.use("/saldo", saldoRoute)

sequelize.sync()
.then(() => app.listen(port, () => console.log(`Banco sincronizado em http://localhost:${port}`)))
.catch((err) => console.log("Erro ao sicronizar banco", err))

