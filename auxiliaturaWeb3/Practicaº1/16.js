//16. Crear un objeto calculadora con métodos para sumar, restar, multiplicar y dividir.
const calculadora={
    sumar:function(a,b){
        return a+b},
    restar:function(a,b){
        return a-b},
    multiplicar:function(a,b){
        return a*b},
    dividir:function(a,b){
        return a/b},
}
console.log(`sumar: ${calculadora.sumar(7,4)}`)
console.log(`restar: ${calculadora.restar(7,4)}`)
console.log(`multiplicar: ${calculadora.multiplicar(7,4)}`)
console.log(`dividir: ${calculadora.dividir(7,4)}`)