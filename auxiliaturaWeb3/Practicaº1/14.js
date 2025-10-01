//14. Generar los primeros 10 números de la serie de Fibonacci con un ciclo.
let fib=[0,1];

for (let i=2;i<10;i++){
    fib[i]=fib[i-1]+fib[i-2];
}

for (let i=0;i<fib.length;i++) {
    console.log(fib[i]);
}
