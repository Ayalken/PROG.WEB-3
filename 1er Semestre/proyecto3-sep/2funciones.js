/*const funcion = ()=>{
   return[
    function f1(x){
        return x%2===0;
    },
    function f2(x){
        return `Hola ${x}`;
    }
   ];       
}

const[w,z]=funcion();
console.log(w(5)); // false
console.log(z("mundo")); // Hola mundo

//que funcion esta caracteristica*/
//una funcion que devuelva tres funciones: primero diga si es par, si es primo y otra que haga un return

const funciones = () => [
    function esPar(x) {
        return x % 2 ===0;
    },
    function esPrimo(x) {
        if (x < 2) return false;
        for (let i = 2; i <= Math.sqrt(x); i++) {
            if (x % i === 0) return false;
        }
        return true;
    },
    function funciones(texto) {
        return `${texto}`;
    }
];

const [par, primo, texto] = funciones();
console.log(par(4));      
console.log(primo(7));    
console.log(texto('Hola'));

console.log("++++++++++++++++++++++++")


const funcion =(y)=>{
    return [
        (x) => x%2===0,
        (x) => {
            for(let i=2;i<=Math.sqrt(x);i++){
                if(x%i===0) return false;
            }
            return true;
        },
        y
    ];
}

const [a,b,c]=funcion(y);
console.log(a(5));
console.log(b(11));
console.log(c);
