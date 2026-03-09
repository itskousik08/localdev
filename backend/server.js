import express from "express"
import fetch from "node-fetch"

const app = express()

app.use(express.json())
app.use(express.static("frontend"))

app.post("/chat", async (req,res)=>{

try{

let r = await fetch("http://localhost:11434/api/generate",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

model:"llama3",

prompt:req.body.message,

stream:false

})

})

let data = await r.json()

res.json({reply:data.response})

}catch{

res.json({reply:"Local AI not running"})

}

})

app.listen(5173,()=>{
console.log("LocalDev running → http://localhost:5173")
})
