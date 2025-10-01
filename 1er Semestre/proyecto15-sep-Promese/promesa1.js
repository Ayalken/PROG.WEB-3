let x= 5;
const miPromesa=new Promise((resolve,reject) => {
    if (x%2===0)
        resolve(true);
    else
        reject(false);
    ;
});

miPromesa.then((res)=>{
    console.log(x,res);
    }
).catch((res)=>{
    console.log(x,res);
    }
).finally(()=>{  //se ejecuta con exito o rechazo
    console.log(`se mostro el resultado`)
});
//debe definir un arreglo si el arreglo tiene un valor positivo debe retornar true,
//pero si uno de ellos es negativo debe retornar falso