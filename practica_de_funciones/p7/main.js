let edad =15
let nombre= "Sammy"
let entrada = false
function DiscoPortero (edad, nombre, entrada){
    return edad >=18, entrada === true
    ?`usted puede ${nombre} entrar` //no se porque cuando lo veo, muestra la edad y no el nombre
    :`No cumle con todos los requisito, no puede entrar`
}
console.log(DiscoPortero("Ben",21,true))