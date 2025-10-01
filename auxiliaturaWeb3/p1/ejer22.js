//2. Escribir una función async que espere 3 segundos y luego muestre “Proceso
//completado”.
const esperar = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
    }, 3000);
    });
};

const miFuncionAsync = async () => {
    await esperar();
    console.log("Proceso completado");
};

miFuncionAsync();
