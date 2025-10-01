const persona =[
    {nombre: "Juan", apellido: "Pérez", edad: 25},
    {nombre: "Ana", apellido: "García", edad: 30},
    {nombre: "Luis", apellido: "Martínez", edad: 22}
];
for(let{nombre,apellido,edad} of persona){
    console.log(`Nombre: ${nombre}, Apellido: ${apellido}, Edad: ${edad}`);
}