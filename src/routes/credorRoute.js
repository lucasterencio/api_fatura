import { Router } from "express";
import { create, listarCredores } from "../controllers/credor.controller.js";


const router = Router()

router.post("/", create)
router.get("/", listarCredores)




export default router