import { Router } from "express";
import { getResume, uploadResume } from "../controllers/resume.js";
import upload from "../middlewares/upload.js";

const router = Router()

router.route("/uploade").post(upload.single("resume"),uploadResume)
router.route("/get-resume").post(getResume)


export default router