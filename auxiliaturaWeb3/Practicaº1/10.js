//10.Crear una función que reciba un objeto rectangulo (base, altura) y devuelva su área.

let rectangulo = { 
    base: 5, 
    altura: 6 };
const Area = (rectangulo) => {
  return rectangulo.base * rectangulo.altura;
}
console.log(`El area es: ${Area(rectangulo)}`);
