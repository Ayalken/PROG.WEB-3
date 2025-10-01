//const arreglo = [1,2,3,4,5]; 
const arreglo = [1,-2,3,4,5]; 

const miPromesa = new Promise((resolve,reject)=>{
    const Positivos=arreglo.every(x=>x>0);
    if(Positivos){
        resolve(true);  
    }else{
        reject(false);  
    }
});

miPromesa.then((res) => {
    console.log("Resultado:",arreglo, res); 
})
.catch((res) => {
    console.log("Resultado:",arreglo, res); 
})
.finally(() => {
    console.log("Se mostró el resultado");
});



//solo con una llamada obtenga falso verdadero solo el arreglo sin tanto then o cash que se muestre directo pero que siga siendo una promesa