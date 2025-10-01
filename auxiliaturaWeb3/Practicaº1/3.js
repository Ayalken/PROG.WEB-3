//Pedir un número y mostrar su tabla de multiplicar del 1 al 10.
/*const prompt = require("prompt-sync")();
let n=Number(prompt("ingrese un numero:"));*/
let n=6;
function tabla(n){
    for (let i=1;i<=10;i++){
        console.log(`${n}x${i}=${n*i}`);
    }
}
console.log(`la tabla de ${n}`);
tabla(n);