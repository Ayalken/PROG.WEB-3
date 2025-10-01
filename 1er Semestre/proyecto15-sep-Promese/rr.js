const arreglo = [3, 5, 7]; 
//const arreglo = [3, -2, 5]; 

const miPromesa = new Promise((resolve,reject)=>{
    const todosPositivos=arreglo.every(valor=>valor>0);
    if(todosPositivos){
        resolve(true);  
    }else{
        reject(false);  
    }
});

miPromesa.then((res) => {
    console.log("Resultado:", res); 
})
.catch((res) => {
    console.log("Resultado:", res); 
})
.finally(() => {
    console.log("Se mostró el resultado");
});



//solo con una llamada obtenga falso verdadero solo el arreglo sin tanto then o cash que se muestre directo pero que siga siendo una promesa