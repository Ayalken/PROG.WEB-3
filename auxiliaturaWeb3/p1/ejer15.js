//15. Recorrer un arreglo de nombres y mostrar solo los que empiezan con la letra “A”.
const nombres = ["Ana", "Juan", "Alberto", "María", "Andrés"];
for (let i = 0; i < nombres.length; i++) {
    if (nombres[i][0] === "A") {
        console.log(nombres[i]);
    }
}
