
//let arreglo = [1, 2, 3, 4, 5];
let arreglo = [2,4]
const promesaImpares=new Promise((resolve, reject)=>{
    let impares=arreglo.filter(n=>n%2!==0);
    if(impares.length>0) {
        resolve(impares); 
    }else{
        reject(arreglo);  
    }
});
//promesaImpares.then(res => console.log(res.join(', '))
//).catch(res => console.log(res.join(', ')));
promesaImpares
    .then(res => {
        console.log(res)})   
    .catch(res => {console.log(res)});