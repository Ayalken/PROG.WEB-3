/*crea una funcion que reciba un numero y devuelve "positivo","negativo" o "cero" segun corresponda,usando operador ternario*/
const n=-10;
const numero = (n) => {
    return (n>0)?"positivo":(n<0)?"negativo":(n===0)?"cero":undefined;
}
console.log(numero(n));