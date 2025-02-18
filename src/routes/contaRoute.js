import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { criarDivida, listarDividas, listarDividasByCredor, autualizarParcela } from "../controllers/conta.controller.js";


const router = Router()


router.post("/divida/:id", /* authMiddleware */  criarDivida)
router.get("/dividas", /* authMiddleware */ listarDividas)
router.get("/dividas/:idCredor", /* authMiddleware */ listarDividasByCredor)
router.patch("/divida/autualizarParcela/:id", autualizarParcela)






export default router