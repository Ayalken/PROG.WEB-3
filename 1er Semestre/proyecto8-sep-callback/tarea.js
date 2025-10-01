/*Tarea: crear una funcion que admitauna miFuncion(a,b,callback1,callback2)
sumar a y b
callback1 sumar anterior resultado 1
callback1 multiplicar anterior resulatado por 3

mostrar resultado
*/

let f1=(x)=>{
    return x+1;
}
let f2=(x)=>{
    return x*3;
}
function miFuncion(a, b, callback1, callback2) {
    let c =a+b;
    let d=callback1(c);
    let e=callback2(d);
};
console.log(miFuncion(2,3,f1,f2));
















function miFuncion1(a, b, callback1, callback2) {
	let resultado = a + b;
	resultado = callback1(resultado);
	resultado = callback2(resultado);
	return resultado;
}
const suma = x => x + 1;
const multi = x => x * 3;

const res = miFuncion1(2, 4, suma, multi);
console.log(callback1);
console.log(callback2);
console.log(res); 