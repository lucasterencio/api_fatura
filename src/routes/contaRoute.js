import { Router } from "express";
import { parcelaMiddleware } from "../middlewares/parcela.middleware.js";
import { 
    criarDivida, 
    listarDividas, 
    listarDividasByCredor, 
    autualizarParcela, 
    alterarStatus,
    resetarStatus,
    
 } from "../controllers/conta.controller.js";


const router = Router()


router.post("/divida/:id", criarDivida)
router.get("/dividas", listarDividas)
router.get("/dividas/:idCredor", listarDividasByCredor)
router.patch("/divida/atualizarParcela/:id", parcelaMiddleware, autualizarParcela)
router.patch("/divida/atualizarStatus/:id", alterarStatus)
router.patch("/divida/resetarStatus", resetarStatus)


export default router