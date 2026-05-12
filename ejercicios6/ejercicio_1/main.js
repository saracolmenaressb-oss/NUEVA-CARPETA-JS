const btn = document.getElementById("btn");

btn.addEventListener("click", cambiarTema);
function cambiarTema() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";

    console.log("Ocurrió un evento click");
}

