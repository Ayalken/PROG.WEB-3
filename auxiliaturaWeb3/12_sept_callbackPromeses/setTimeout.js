/* setTioeout->llama a la funcion flecha "()=>{"
y lo ehjecuta una ves en 3000ms equivale a 3 seg */
const f=(mensaje,callback)=>{
    setTimeout(()=>{
        console.log(`${mensaje}`)
        callback();
    },3000)
}
const flecha=()=>{
    console.log("Ejecucion cada 3 segundos");
}
f("Hola",flecha);