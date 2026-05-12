 
/* function calcularTotal (cliente, monto){
    let final= monto-20
    if(monto >=100){
        return `Hola ${cliente}, tu total a pagar es: ${final}`
    }else{
        return `Hola ${cliente}, tu tota a pagar es: ${monto}`
    }

} */
function calcularTotal(cliente, monto){
    let final = monto-20
    return monto >=100
    ?  `Hola ${cliente}, tu total a pagar es: ${final}`
    :   `Hola ${cliente}, tu tota a pagar es: ${monto}`
}
console.log(calcularTotal("Sara", 150)); // Debería decir 130
console.log(calcularTotal("Kenji", 80));  // Debería decir 80

