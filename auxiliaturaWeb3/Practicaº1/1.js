//1. Pedir un número y mostrar si es positivo, negativo o cero (if/else).
//const prompt = require("prompt-sync")(); 
//let n = Number(prompt("Ingrese un número: "));
let n=2;
if (n > 0) {
    console.log(`${n} Es positivo`);
} else if (n < 0) {
    console.log("Es negativo");
} else {
    console.log("Es cero");
}
