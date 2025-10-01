/*const personas = [
	{ nombre: 'Jose', apellido: 'Perez' },
	{ nombre: 'Ana', apellido: 'Gomez' },
	{ nombre: 'Luis', apellido: 'Martinez' },
	{ nombre: 'Maria', apellido: 'Lopez' },
	{ nombre: 'Carlos', apellido: 'Ramirez' }
];

function buscar(a) {
	for (const persona of a) {
		if (persona.nombre === 'Jose') {
			return 'Sí está Jose';
		}
	}
	return 'No está Jose';
}

console.log(buscar(personas));*/


const personas = [
    { nombre: 'Jose', apellido: 'Perez' },
    { nombre: 'Ana', apellido: 'Gomez' },
    { nombre: 'Luis', apellido: 'Martinez' },
    { nombre: 'Maria', apellido: 'Lopez' },
    { nombre: 'Carlos', apellido: 'Ramirez' }
];

const existeJose = personas.some(persona => persona.nombre === 'Jose');
console.log(existeJose ? 'Sí está Jose' : 'No está Jose');