const persona = {
    nombre: "Juan",
    apellido: "Perez",
};

console.log(persona);
console.log({ persona });
console.log(persona.nombre);
console.table(persona);

const persona2 = { ...persona };
persona2.nombre = "Pedro";

console.log(persona);
console.log({ persona2 });
