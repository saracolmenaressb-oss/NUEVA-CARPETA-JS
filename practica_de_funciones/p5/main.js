let nombre = "Sara";
let edad = 17; // Las edades suelen ser números, mejor sin comillas.

function saludar(nombre, edad) {
    // Usamos comillas invertidas `` para envolver todo el texto
    return `Hola ${nombre}, tienes ${edad} años.`;
}

// Llamamos a la función pasando un string y un número
console.log(saludar("Yaz", 17));