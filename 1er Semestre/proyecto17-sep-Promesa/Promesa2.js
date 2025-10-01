const miPromesa=new Promise((resolve,reject) => {
    reject(`Se perdio`); //devolucion exitosa
});


miPromesa.then((miDinero)=>{
    console.log(`Tengo mi dinero ${miDinero}`);
    }
).catch((razon)=>{
    console.warn(` ${razon}`);
    }
).finally(()=>{  //se ejecuta con exito o rechazo
    console.log(`La vida continua`)
});







//ai el numero entero, siempre que el numero sea par me devuelve true y es impar me devuelve false