import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { create, listarCredores } from "../controllers/credor.controller.js";


const router = Router()

router.post("/", /* authMiddleware */ create)
router.get("/", /* authMiddleware */ listarCredores)




export default router