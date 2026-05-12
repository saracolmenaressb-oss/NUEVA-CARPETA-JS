const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", async (e) => {
        e.preventDefault();

            const nombre = document.getElementById("nombre").value;
            const correo = document.getElementById("correo").value;

            const datos = {
                nombre: nombre,
                correo: correo
            };

            try {
                const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts", {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify(datos)
                });

                const resultado = await respuesta.json();

                console.log(resultado);

            } catch (error) {
                console.log("Error:", error);
            }
        });