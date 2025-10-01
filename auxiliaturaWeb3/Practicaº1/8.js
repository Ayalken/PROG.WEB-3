//8. Recorrer un arreglo de números y mostrar solo los pares.
const arreglo=[1,2,3,4,5,6];
pares=[];
i=0;

while(i<arreglo.length){
    if(arreglo[i]%2==0){
        pares.push(arreglo[i])
    }
    i++;
}

console.log(`los pares son`,pares);