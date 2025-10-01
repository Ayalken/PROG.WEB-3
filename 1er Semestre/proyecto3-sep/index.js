//!DESESTRUCTURACION DE ARREGLOS

const v=['rojo','verde','azul']
/*const primero = v[0]
const segundo = v[1]
const tercero = v[2]
console.log(primero,segundo,tercero);*/

//?CON DESESTRURACION DE OBJETOS
const [primero,segundo,tercero]=v;
console.log(primero,segundo,tercero);

const[,,i]=v;
console.log(i);

const a = [1,2,3,4,5]
const [x,...resto]=v;
console.log(x,resto);

function abc(){
    return ["abc",123];
}
const [letras, numeros] = abc();
console.log(letras,numeros);




const funcion =()=>{
    return["abc",()=>{
        return "Hola mundo";
    }];
}

const[z,f]=funcion();
console.log(z);
console.log(f());


