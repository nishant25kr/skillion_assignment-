import express from "express"
import cookieParser from "cookie-parser"

const app = express()
app.use(express.json());
app.use(cookieParser())


app.get("/",(req,res)=>{
    res.send("Hi this is skillion server")
})

import ResumeRouter from "./routes/resume.js"
import UserRouter from "./routes/user.js"

app.use("/api/resume",ResumeRouter)

app.use("/api/user",UserRouter)

export { app }

