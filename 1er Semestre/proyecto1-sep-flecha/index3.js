/*const nombre='Angel';
let saludar= (x)=> `Hola ${x}`;//admite parametro y constante

console.log(saludar(nombre));*/
//si hay un solo return puede borrar y tiene flecha puede borra return y llaves


const personas = [
    { nombre: 'Juan', apellido: 'Perez' }
    ,{ nombre: 'Ana', apellido: 'Gomez' }
    ,{nombre: 'Luis', apellido: 'Martinez'}
];
let saludar= (x,y)=> `Hola ${x} ${y}`;

for (let i = 0; i < personas.length; i++) {
    let a = personas[i].nombre;
    let b = personas[i].apellido;
    console.log(saludar(a,b));
}






function mostrarSaludo(nombre, apellido) {
    console.log(`Hola ${nombre} ${apellido}`);
}
mostrarSaludo('Carlos', 'Ramirez');