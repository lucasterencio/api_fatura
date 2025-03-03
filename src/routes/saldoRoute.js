import { Router } from "express";
import { pagar, resetarSaldo } from "../controllers/saldo.controller.js";


const router = Router()

router.patch("/pagar/:id", pagar)
router.patch("/resetarSaldo", resetarSaldo)


export default router