/*const miPromesa=new Promise((resolve, reject)=>{
    setTimeout(()=>{
    resolve(100);
    },5000); //2 seg
});

miPromesa.then((monto)=>{
    console.log(`Me devolvio ${monto}`);
}).finally(()=>{
    console.log(`la vida continua`);
});*/

const miPromesa=new Promise((resolve, reject)=>{
    setTimeout(()=>{
    reject('No me devolvio',100);
    },1000); //2 seg
});

miPromesa.catch((razon)=>{
    console.log(razon);
}).finally(()=>{
    console.log(`la vida continua`);
});