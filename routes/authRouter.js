import { Router } from "express";
const router = Router();
import { login, logout, register } from "../controlers/authController.js";
import {
  validateRegisterInput,
  validateLoginInput,
} from "../middleware/validationMiddleware.js";

validateRegisterInput;
router.post("/register", validateRegisterInput, register);
router.post("/login", validateLoginInput, login);
router.get("/logout", logout);

export default router;
