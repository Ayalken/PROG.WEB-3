//13. Invertir una cadena sin usar .reverse().
let cadena = "AuxiAumenteme nota";
let invertida = "";

let i = cadena.length - 1;
while (i >= 0) {
    invertida+=cadena[i];
    i--;
}
console.log(`Original: ${cadena}`);
console.log(`Invertida: ${invertida}`);

