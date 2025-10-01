// 17. Recorrer un objeto y mostrar sus claves y valores sin usar Object.entries().
const persona = {
    nombre: "Goku",
    edad: 42,
    poder: "Kamehameha"
};

for (let clave in persona) { //recorre cada clave del objeto nombre, edad y poder
    console.log(`${clave}: ${persona[clave]}`); 
}
