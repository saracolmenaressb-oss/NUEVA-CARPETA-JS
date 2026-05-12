async function cargarImagen() {

    const respuesta = await fetch("https://picsum.photos/300");

    const imagenBlob = await respuesta.blob();

    const urlImagen = URL.createObjectURL(imagenBlob);

    document.getElementById("imagen").src = urlImagen;
}

cargarImagen();