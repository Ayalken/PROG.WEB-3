/*crear una funcion flecha, con dos callback, el primer calback debe 
  recibir un array como parametro y hacer la suma de sus elementos,
  el segundo callback debe verificar si el numero dado por el primer callback es primo */

/*const sumaArray = (arr) => arr.reduce((acc, val) => acc + val, 0);

const esPrimo = (n) => {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
};

const miTarea = (arr, callback1, callback2) => {  
    const suma = callback1(arr);
    const primo = callback2(suma);
    return [suma, primo];
};

const [z, w] = miTarea([1,3], sumaArray, esPrimo);
console.log(z); 
console.log(w); */

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++"); 


//!AUXILIAR
const f=(array,callback,callback3)=>{
    let suma =callback(array)
    return callback3(suma)
}
const sumaArray=(array)=>{
    let a=array;
    let suma=0;
    for (let i=0;i<a.length;i++){
        suma=suma+a[i]
    }
    return suma
}
const Primo=(suma)=>{
    if(suma<2) return "No es primo";

    for (let i=2;i<=Math.sqrt(suma);i++){
        if(suma%i===0) return "No es primo"
    }
    return "Es primo"
}

console.log(f([2,3],sumaArray,Primo))


