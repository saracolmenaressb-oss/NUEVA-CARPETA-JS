const url = new URL("https://tienda.com?categoria=ropa&color=rojo");

const parametros = new URLSearchParams(url.search);

console.log(parametros.get("categoria"));
console.log(parametros.get("color"));

parametros.set("color", "azul");

console.log(parametros.toString());