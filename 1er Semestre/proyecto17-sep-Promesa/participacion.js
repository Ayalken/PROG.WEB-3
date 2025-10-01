// Puedes probar con el otro ejemplo cambiando el arreglo estudiantes
//Declare un arreglo como público. Haga uso de una promesa 
//para retornar en otro arreglo solo a los alumnos que hayan 
//aprobado, si este arreglo no tuviera ningún alumno aprobado 
// retorne el mismo arreglo.

let estudiantes = [
    { nombre: 'Juan', nota: 45 },
    { nombre: 'Maria', nota: 100 },
    { nombre: 'Jose', nota: 80 }
];


const miPromesa = new Promise((resolve, reject) => {
    let aprobados = [];
    for (let i = 0; i < estudiantes.length; i++) {
        if (estudiantes[i].nota >= 51) {
            aprobados.push(estudiantes[i]);
        }
    }
    if (aprobados.length > 0) {
        resolve(aprobados);
    } else {
        reject(estudiantes);
    }
});

miPromesa.then(res => {
    console.log(res);
}).catch(res => {
    console.log(res);
}).finally(() => {
    console.log("Se mostró el resultado");
});

