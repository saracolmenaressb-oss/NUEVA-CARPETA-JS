const verificarAcceso = (numero)=>{
    return new Promise((resolve, reject)=>{
       setTimeout(()=>{
        if(numero > 18){
            return resolve("¡Bienvenido al club! Disfruta la fiesta.");
        }else{
            return reject("Acceso denegado. Eres menor de edad.")
        }
       },2000); 
    })

}
verificarAcceso(19)
.then((mensaje)=>{
    console.log(mensaje);
})
.catch((error)=>{
    console.error(error);
})
.finally(()=>{
    console.log("--Persona requisada")
})
