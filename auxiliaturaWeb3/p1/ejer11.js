//11. Escribir un programa que determine si un número ingresado es primo.
let n = 17;
let esPrimo = true;

if (n < 2) {
    esPrimo = false;
} else {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            esPrimo = false;
            break;
        }
    }
}

if (esPrimo) {
    console.log(`${n} es primo`);
} else {
    console.log(`${n} no es primo`);
}
