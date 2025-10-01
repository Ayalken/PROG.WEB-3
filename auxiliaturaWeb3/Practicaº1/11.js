//11. Escribir un programa que determine si un número ingresado es primo.
let numero = 5;

function esPrimo(n) {
    if (n<=1) 
        return false;
    for (let i=2;i<n;i++) {
        if (n%i===0) 
            return false;
    }
    return true;
}

console.log(`${numero} es primo?`,esPrimo(numero));
