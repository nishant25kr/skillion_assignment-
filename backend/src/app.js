import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors";
import path from "path";


const app = express()

app.use(
  "/uploads/resumes",
  express.static(path.join(process.cwd(), "uploads/resumes"))
);
app.use(express.json());
app.use(cookieParser())
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://skillion-assignment.vercel.app"
    ],
    credentials: true,
  })
);


app.get("/", (req, res) => {
  res.send("Hi this is skillion server")
})

import ResumeRouter from "./routes/resume.js"
import UserRouter from "./routes/user.js"

app.use("/api/resume", ResumeRouter)

app.use("/api/user", UserRouter)

export { app }

