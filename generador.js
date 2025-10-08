let readline= require('readline')
let rl= readline.createInterface({
  input: process.stdin,  
  output: process.stdout  
});
async function generarcontraseña(){ rl.question("ingrese cualquier caracter para generar una contraseña o escriba salir para salir"
    , async function(rl1) { if(rl1==="salir"){rl.close(); return}
        let a=await fetch("https://api.api-ninjas.com/v1/passwordgenerator?length=16&exclude_special_chars=false"
    ,
     {
  headers: { "X-Api-Key": "MgNgc3xyXGfQiBHBPFhT+g==y13ETb1EDXQrr6cb" }}
).then(
    function(res){return res.json()}
)

console.log(a);generarcontraseña(); return a}
)
    
}
generarcontraseña()
