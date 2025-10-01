
let x=0;
const miPromesa=new Promise((resolve,reject) => {
    if (x>=0) 
        resolve(true);
    else
        reject(false);
});


miPromesa.then((res)=>{
    console.log(res);
    }
).catch((res)=>{
    console.log(res);
    }
).finally(()=>{  //se ejecuta con exito o rechazo
    console.log(`se evaluo el resultdo`)
});


