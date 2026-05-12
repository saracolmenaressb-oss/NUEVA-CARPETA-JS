const boton = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", () => {

    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

    xhr.onreadystatechange = function () {

        if (xhr.readyState === 1) {
            mensaje.textContent = "Cargando...";
        }

        if (xhr.readyState === 4) {

            mensaje.textContent = "Carga completada";

            console.log(JSON.parse(xhr.responseText));
        }
    };

    xhr.send();
});
