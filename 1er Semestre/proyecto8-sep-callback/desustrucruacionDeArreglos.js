
/*const arreglo=['Juan','Maria','Jose'];
let primero=arreglo[0];
let segundo=arreglo[1];
let tercero=arreglo[2];
console.log(primero,segundo,tercero);*/


/*
let[primero,segundo,tercero]=arreglo;
console.log(primero,segundo,tercero);
let[...arreglo1]=arreglo;
console.log(arreglo1);
let[a,...resto]=arreglo;
console.log(a,resto);*/


//!++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const miFuncion=(x)=>{
    return [
        x,
        (x)=>x%2===0
    ];
}
let [primero,segundo]=miFuncion(3);
console.log(primero,segundo(6));