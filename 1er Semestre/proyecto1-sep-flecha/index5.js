//!DESETRUCRACION DE OBJETOS

const persona = { 
    nombre: 'Juan', 
    apellido: 'Perez' 
};
/*let x =persona.nombre;
let y =persona.apellido;*/

let {nombre:x, apellido:y} = persona;
console.log(x,y);


console.log("+++++++++++");


const personas = [
    { nombre: 'Juan', apellido: 'Perez' },
    { nombre: 'Ana', apellido: 'Gomez' },
    { nombre: 'Luis', apellido: 'Martinez' }
];
let saludar = (x, y) => `Hola ${x} ${y}`;

for (let i = 0; i < personas.length; i++) {
    const { nombre:a, apellido:b } = personas[i];
    console.log(saludar(a, b));
}