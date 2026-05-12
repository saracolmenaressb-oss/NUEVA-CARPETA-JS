const boton = document.getElementById("btn");
const lista = document.getElementById("listaNoticias");
async function cargarNoticias() {

    try {

        const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts");

        // Verificar si la respuesta fue exitosa
        if (!respuesta.ok) {
            throw new Error("Error en la petición");
        }

        const noticias = await respuesta.json();

        lista.innerHTML = "";

        noticias.slice(0, 5).forEach(noticia => {
            const elemento = document.createElement("li");

            elemento.textContent = noticia.title;

            lista.appendChild(elemento);
        });

    } catch (error) {

        console.log("Ocurrió un error:", error);
        lista.innerHTML = "<li>Error al cargar noticias</li>";
    }
}

boton.addEventListener("click", cargarNoticias);