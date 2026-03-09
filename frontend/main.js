async function sendMsg(){

let input = document.getElementById("msg")
let text = input.value

if(!text) return

addMsg(text,"user")

input.value=""

let r = await fetch("/chat",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({message:text})
})

let data = await r.json()

addMsg(data.reply,"ai")

}

function addMsg(text,type){

let chat = document.getElementById("chat")

let div = document.createElement("div")

div.className="msg "+type

div.innerText=text

chat.appendChild(div)

chat.scrollTop=chat.scrollHeight

}
