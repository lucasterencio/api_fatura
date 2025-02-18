import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { 
    criarDivida, 
    listarDividas, 
    listarDividasByCredor, 
    autualizarParcela, 
    alterarStatus,
    resetarStatus,
    pagar,
    resetarSaldo
 } from "../controllers/conta.controller.js";


const router = Router()


router.post("/divida/:id", /* authMiddleware */  criarDivida)
router.get("/dividas", /* authMiddleware */ listarDividas)
router.get("/dividas/:idCredor", /* authMiddleware */ listarDividasByCredor)
router.patch("/divida/atualizarParcela/:id", autualizarParcela)
router.patch("/divida/atualizarStatus/:id", alterarStatus)
router.patch("/divida/resetarStatus", resetarStatus)
router.patch("/divida/pagar/:id", pagar)
router.patch("/divida/resetarSaldo", resetarSaldo)






export default router