const persona ={
    nombre: `GOKU`,
    apellido: `SON`
}

console.log(persona);
console.log(persona.nombre);
console.table(persona);

const persona2 ={...persona};//clon
persona2.nombre="Vegeta";
console.log(persona.nombre);
console.log(persona2.nombre);
