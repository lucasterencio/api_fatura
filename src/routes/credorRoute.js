import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { create, listarCredores, criarDivida, listarDividas } from "../controllers/credor.controller.js";
import { credorMiddleware } from "../middlewares/credor.middleware.js";

const router = Router()

router.post("/", /* authMiddleware */ create)
router.get("/", /* authMiddleware */ listarCredores)
router.post("/divida/:id", /* authMiddleware */ credorMiddleware, criarDivida)
router.get("/dividas", /* authMiddleware */ listarDividas)


export default router