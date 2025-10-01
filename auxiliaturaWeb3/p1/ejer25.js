//5. Crear una promesa que devuelva un arreglo de frutas y mostrarlo usando
//async/await.
function obtenerFrutas() {
    return new Promise((resolve) => {
        const frutas = ["Manzana", "Banana", "Naranja", "Fresa"];
        resolve(frutas);
    });
}

async function mostrarFrutas() {
    const frutas = await obtenerFrutas();
    console.log("Frutas:", frutas);
}

mostrarFrutas();
