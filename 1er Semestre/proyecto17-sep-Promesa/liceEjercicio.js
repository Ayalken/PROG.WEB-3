let x=[1,2,3,4,5];

function verifica(a){
    for (let i=0;i<a.length;i++)
        if (a[i]<0)
            return false;
    return true;
}
const miPromesa=new Promise((resolve,reject)=>{
    let band=verifica(x);
    if(band)
        resolve(true);
    else
        reject(false);
});

miPromesa.then((res) => {
    console.log("Resultado:",x, res); 
})
.catch((res) => {
    console.log("Resultado:",x, res); 
})
.finally(() => {
    console.log("Se mostró el resultado");
});