const flecha=(array,callback,callback2,callback3)=>{
    let suma=callback(array);
    let promedio=suma/array.length;

    (promedio>=51)? callback2():callback3()
}

const Suma=(array)=>{
    let contador=0;
    for(let i=0;i<array.length;i++){
        contador+=array[i];
    }
    return contador;
}

function aprobado(){
    console.log("APROBADO");
}

function reprobado(){
    console.log("REPROBADO");
}
flecha([51,45,51],Suma,aprobado,reprobado);