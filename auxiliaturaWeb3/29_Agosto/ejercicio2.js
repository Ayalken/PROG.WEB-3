const objeto = {
    obtenerPersonas: () => [
        { nombre: "Juan", apellido: "Pérez", ci: "123456" },
        { nombre: "Ana", apellido: "Gómez", ci: "654321" },
        { nombre: "Luis", apellido: "Ramírez", ci: "789012" }
    ]
};

const personas = objeto.obtenerPersonas();

personas.forEach(persona => {
    console.log(`${persona.nombre} ${persona.apellido}`);
});

console.log(`Cantidad total de personas: ${personas.length}`);