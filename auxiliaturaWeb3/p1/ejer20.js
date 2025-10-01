//20.Crear un arreglo de objetos mascotas y recorrerlo para mostrar solo las que
//sean de tipo “perro”.
const mascotas = [
    { nombre: "Firulais", tipo: "perro" },
    { nombre: "Misu", tipo: "gato" },
    { nombre: "Rex", tipo: "perro" },
    { nombre: "Carnal", tipo: "burro" },
    { nombre: "Rufus", tipo: "perro" },
    { nombre: "Tweety", tipo: "pájaro" }
];

for (let i = 0; i < mascotas.length; i++) {
    if (mascotas[i].tipo === "perro") {
        console.log(`${mascotas[i].nombre} es un perro`);
    }
}
