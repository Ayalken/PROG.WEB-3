let numeros = [1, 2, 3, 2, 1, 6, 3, 4, 5, 2];
let numerosDistintos = [];

for (let num of numeros) {
    if (!numerosDistintos.includes(num)) {
        numerosDistintos.push(num);
    }
}

console.log(`La cantidad de números distintos es ${numerosDistintos.length}`);
console.log("Los números distintos son: " + numerosDistintos.join(" "));
