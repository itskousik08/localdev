async function checkAI(){

 let r = await fetch("/ai")
 let d = await r.json()

 document.getElementById("out").innerText =
 JSON.stringify(d,null,2)

}
