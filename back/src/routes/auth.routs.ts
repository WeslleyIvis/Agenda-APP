import { Router } from "express";
import { loginProfessional } from "../controllers/auth.controller";

const authRouter = Router();

authRouter.post('/login', loginProfessional)

export default authRouter