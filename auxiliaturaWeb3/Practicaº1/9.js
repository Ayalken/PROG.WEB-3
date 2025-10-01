//9. Contar cuántos números impares hay en un arreglo.
const arreglo=[1,2,3,4,5,6,7];
let impar=0;
let i=0;

while (i<arreglo.length) {
    if(arreglo[i]%2!==0){
        impar++;
    }
    i++;
}
console.log(`hay ${impar} numeros impares`) 