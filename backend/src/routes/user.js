import { Router } from "express";
import {
    register,
    loginuser,
    logoutUser
} from "../controllers/user.js"
import { verifyJWT } from "../middlewares/auth.js";

const router = Router()

router.route("/register").post(register)

router.route("/login").post(loginuser)
router.route("/logout").post(verifyJWT,logoutUser)

export default router