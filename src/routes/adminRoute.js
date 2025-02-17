import { Router } from "express";

import { create } from "../controllers/admin.controller.js";

const router = Router()

router.post("/register", create)


export default router