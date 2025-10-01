const a = "Juan";
const b = "Perez";

const c = a + " " + b;
console.log(c); // "Juan Perez"

const d = `$(a) $(b)`; 
console.log(d);

function saludo(x) {
    return "Hola " + x;
}

console.log(`Saludo: ${saludo(a)}`); 
