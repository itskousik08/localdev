import express from "express"
import fetch from "node-fetch"
import open from "open"

const app = express()

app.use(express.static("frontend"))

app.get("/ai", async (req,res)=>{
  try{
    const r = await fetch("http://localhost:11434/api/tags")
    const data = await r.json()
    res.json({status:"AI connected",models:data})
  }catch{
    res.json({status:"AI not found"})
  }
})

app.listen(5173,()=>{
 console.log("LocalDev running → http://localhost:5173")
 open("http://localhost:5173")
})
