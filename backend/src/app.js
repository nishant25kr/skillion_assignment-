import express from "express"

const app = express()

app.use("/",(req,res)=>{
    res.send("Hi this is sillion server")
})

export { app }

