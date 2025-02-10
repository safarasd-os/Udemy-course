import { Router } from "express";
const router = Router();
import { login, logout, register } from "../controlers/authController.js";
import {
  validateRegisterInput,
  validateLoginInput,
} from "../middleware/validationMiddleware.js";
import rateLimiter from "express-rate-limit";

const apiLimiter = rateLimiter({
  windowsMs: 15 * 60 * 1000,
  max: 10,
message: {msg: 'IP rate limit exceeded, retry in 15 minutes'}
})
validateRegisterInput;
router.post("/register",apiLimiter, validateRegisterInput, register);
router.post("/login", apiLimiter, validateLoginInput, login);
router.get("/logout", logout);

export default router;
