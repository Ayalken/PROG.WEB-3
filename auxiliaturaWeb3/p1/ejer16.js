// 16. Crear un objeto calculadora con métodos para sumar, restar, multiplicar y dividir.
const calculadora = {
    sumar: function(a, b) {
        return a + b;
    },
    restar: function(a, b) {
        return a - b;
    },
    multiplicar: function(a, b) {
        return a * b;
    },
    dividir: function(a, b) {
        return a / b;
    }
};

console.log(`Suma: ${calculadora.sumar(8, 4)}`);
console.log(`Resta: ${calculadora.restar(8, 5)}`);
console.log(`Multiplicación: ${calculadora.multiplicar(7, 4)}`);
console.log(`División: ${calculadora.dividir(81, 9)}`);