
//?OPERADORES IGUAL ESTRICTO

const a=4;
const b="4";

if (a===b){
    console.log("son iguales")
}else{
    console.log("no son iguales")
}

//?CREACION UN OBJETO CON FUNCIONES
const objeto={
    Nombre:"Angel",
    Edad:"40",
    sumar:(a,b)=>{
        return a+b;
    }
}
console.log(objeto.Nombre,objeto.Edad,objeto.sumar(4,5));