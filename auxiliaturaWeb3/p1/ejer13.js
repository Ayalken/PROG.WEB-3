//13. Invertir una cadena sin usar .reverse().
let cadena = "Goku";
let invertida = "";

for (let i = cadena.length - 1; i >= 0; i--) {
    invertida = invertida + cadena[i];
}
console.log(`Original: ${cadena}`);
console.log(`Invertida: ${invertida}`);
