const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (false) { // Cambia a true si quieres simular éxito
            resolve("Sin errores");
        } else {
            reject("Con errores");
        }
    }, 2000);
});
//promesa=exito
//promesa=error
promesa.then((exito) => {
    console.log(exito);
})
.catch((error) => {
    console.log(error);
});
