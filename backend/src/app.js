import express from "express"

const app = express()
app.use(express.json());


app.get("/",(req,res)=>{
    res.send("Hi this is skillion server")
})

import ResumeRouter from "./routes/resume.js"

app.use("/api/resume",ResumeRouter)

export { app }

