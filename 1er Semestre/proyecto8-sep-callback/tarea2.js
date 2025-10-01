/*Tarea:crear una funcion.
    miFuncion(x,callback1,callback2)
    x es un numero 
    callback1 que verifique si x es primo
    callback2 que verifique si es un numero perfecto
Utilize el concepto callback y desestruracion de arreglos
*/

const esPrimo = (x) => {
    if (x < 2) return false;
    for (let i = 2; i <= Math.sqrt(x); i++) {
        if (x % i === 0) return false;
    }
    return true;
};

const esPerfecto = (x) => {
    let suma = 0;
    for (let i = 1; i < x; i++) {
        if (x % i === 0) suma += i;
    }
    return suma === x;
};

const miFuncion = (x, callback1, callback2) => {
    return [
        x,              
        callback1(x),   
        callback2(x)    
    ];
};
const [numero, primo, perfecto] = miFuncion(6, esPrimo, esPerfecto);

console.log(`Número: ${numero}`);
console.log('¿Es primo?', primo);      
console.log('¿Es perfecto?', perfecto);

