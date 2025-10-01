function miFuncion(productos) {
let caros = [];
let baratos = [];

for (let i=0;i<productos.length;i++) {
    if (productos[i].precio>50){
    for (let j=0;j<caros.length;j++) {
        if (caros[j].nombre===productos[i].nombre) {
        if (productos[i].precio > caros[j].precio) {
            caros[j] = productos[i];
            }
}
}
        caros.push(productos[i]);
        
    } else {
    for (let j=0;j<baratos.length;j++) {
        if (baratos[j].nombre===productos[i].nombre) {
        if (productos[i].precio>baratos[j].precio) {
            baratos[j]=productos[i]; 
            }
    }
    }
        baratos.push(productos[i]); 
    }
    }

return { caros, baratos };
}

let productos = [
    { nombre: 'cuaderno', precio: 30 },
    { nombre: 'estuche', precio: 60 },
    { nombre: 'cuaderno', precio: 40 }
];

const { caros, baratos } = miFuncion(productos);
console.log(caros, baratos);
