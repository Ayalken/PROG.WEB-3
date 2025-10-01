//Crear un arreglo de objetos alumnos con nombre y nota, y mostrar los aprobados(nota ≥ 51).
const alumnos=[
    {nombre:"DIEGO",nota:45},
    {nombre:"URSULA",nota:54},
    {nombre:"SOF",nota:98}
];
for (let i= 0; i<alumnos.length;i++){
    if(alumnos[i].nota>=51){
    console.log(`aprobado: ${alumnos[i].nombre} con nota ${alumnos[i].nota}`)
}
}