import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { criarDivida, listarDividas, listarDividasByCredor, pagar } from "../controllers/conta.controller.js";


const router = Router()


router.post("/divida/:id", /* authMiddleware */  criarDivida)
router.get("/dividas", /* authMiddleware */ listarDividas)
router.get("/dividas/:idCredor", /* authMiddleware */ listarDividasByCredor)
router.get("/dividas/pagar/:idDivida", /* authMiddleware */ pagar)




export default router