import { Router } from "express";
import {
  getAllUsers,
  registerUser,
} from "../src/controllers/userControllers.js";
import { verifyToken } from "../middleware/verifytoken.middleware.js";

const router = Router();

router.post("/register", verifyToken, registerUser);
router.get("/usuarios",verifyToken ,getAllUsers);

export default router;
