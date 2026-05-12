let nombre = "Brooklin"; // Corregido: con comillas
let edad = 16;

function verificarAcceso(nombre, edad) {
    if (edad < 18) {
        // Usamos return para que la función "entregue" el mensaje
        return `Lo siento ${nombre}, eres menor de edad.`; 
    } else {
        return `Bienvenido ${nombre}, puedes pasar porque tienes ${edad} años.`;
    }
}

// Como la función hace un "return", el console.log recibe el mensaje y lo muestra
console.log(verificarAcceso("Kenji", 18));