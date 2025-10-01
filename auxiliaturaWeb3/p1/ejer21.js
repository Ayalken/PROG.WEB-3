//1. Crear una promesa que devuelva un mensaje después de 2 segundos y mostrarlo en consola.
const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hola soy Goku");
    }, 2000);
});

miPromesa.then((mensaje) => {
    console.log(mensaje);
});
