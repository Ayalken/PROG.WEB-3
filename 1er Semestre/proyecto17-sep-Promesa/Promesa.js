const miPromesa=new Promise((resolve) => {
        resolve(100); //devolucion exitosa
});

miPromesa.then((miDinero)=>{
    console.log(`Tengo mi dinero ${miDinero}`);
    }
).catch((miDinero)=>{
    console.log(` ${miDinero}`);
    }
).finally(()=>{  //se ejecuta con exito o rechazo
    console.log(`La vida continua`)
});
//ai el numero entero, siempre que el numero sea par me devuelve true y es impar me devuelve false