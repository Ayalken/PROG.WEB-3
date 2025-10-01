// 18. Crear un arreglo de objetos alumnos con nombre y nota, y mostrar los aprobados (nota ≥ 51).
const alumnos = [
    { nombre: "Goku", nota: 45 },
    { nombre: "Bulma", nota: 80 },
    { nombre: "Vegeta", nota: 50 },
    { nombre: "Milk", nota: 75 }
];

for (let i = 0; i < alumnos.length; i++) {
    if (alumnos[i].nota >= 51) {
        console.log(`${alumnos[i].nombre} aprobó con nota de ${alumnos[i].nota}`);
    }
}
