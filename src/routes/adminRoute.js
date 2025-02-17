import { Router } from "express";

import { create } from "../controllers/admin.controller.js";
import { login } from "../controllers/auth.controller.js";

const router = Router()

router.post("/register", create)
router.post("/auth", login)


export default router