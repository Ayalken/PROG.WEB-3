/*callback
function saludar(nombre, callback, callback) {
  console.log("Hola " + nombre );
  callback(); // Se ejecuta la función recibida como argumento
}

function despedir() {
  console.log("Adiós!");
}
function numero(){
    console.log("7");
}

saludar("Ana", despedir, numero);
// callback es el despedir del ejemplo como esta afuera lo hace como si estuviera adentro.*/

//!++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const f=(x,y)=>{
    let z =y*x;
    return z;
};

function sumar(a,b,callback){
    console.log(a,b);
    let c= callback(a,b);
    return c;
}
console.log(sumar(3,2,f));

