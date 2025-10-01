//17. Recorrer un objeto y mostrar sus claves y valores sin usar Object.entries().
const persona=[
    {nombre: "Juan", apellido: "Pérez", edad: 25},
    {nombre: "Ana", apellido: "García", edad: 30},
    {nombre: "Luis", apellido: "Martínez", edad: 22}
];
for(let i=0;i<persona.length;i++){
    console.log(`Nombre: ${persona[i].nombre},
Apellido: ${persona[i].apellido},
Edad: ${persona[i].edad},
++++++++++++++++++++++++++`);
}
