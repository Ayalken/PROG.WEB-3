//?ITERRA UN ARRAY,CASILLA POR 
//?CASILLA POSICION A POSICION

const a=[1,2,3,4,5];

for(let i=0;i<a.length;i++){
    console.log(a[i]);
}



console.log("++++++++++++++++++++++++");

//?CAPTURA EL PRIMER ELEMENTO DEL ARRAY Y LO IMPRIME


for(let b of a){
    console.log(b);
}




console.log("++++++++++++++++++++++++");

const objeto={
    nombre:"Angel",
    edad:34,
    sumar:(a,b)=>{
        return a+b;
    }
}
console.log(objeto.sumar(4,5));