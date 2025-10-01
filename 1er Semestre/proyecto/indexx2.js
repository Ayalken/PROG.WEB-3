const a= [1,2,3,4,5]; //!es un vector 
console.log(a);

let b = [...a, 6]//es un clon modificado
console.log(b);

const c=a.map( //lo mapea para que recora todos los vectores para modificarlos con l funcion
    function (x) {
        return x*2;
    }
)
console.log(a);
console.log(c);

//constantes, arreglos, cadenas 
