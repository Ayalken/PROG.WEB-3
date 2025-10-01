//4. Hacer una promesa que simule el resultado de “aprobado” o “reprobado” y
//consumirla con await.
const resultado = () => {
    return new Promise((resolve, reject) => {
        const estado = Math.random() < 0.5 ? "aprobado" : "reprobado";
        resolve(estado);
    });
};

const mostrarResultado = async () => {
    const res = await resultado();
    console.log("El resultado es:", res);
};

mostrarResultado();
