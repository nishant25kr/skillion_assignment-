import { Router } from "express";
import { uploadResume } from "../controllers/resume.js";
import upload from "../middlewares/upload.js";

const router = Router()

router.route("/uploade").post(upload.single("resume"),uploadResume)


export default router