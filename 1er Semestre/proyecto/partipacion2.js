//dada una entrada de cadena deletras minusculas,obtener la frecuencia de las letras
//EJEMPLO: Entrada: cadena="abca"
//Salida:
//a=2, b=1 ,c=1
const cadena = "jazmin";

const frecuencia = {};

for (let letra of cadena) {
    frecuencia[letra] = (frecuencia[letra] || 0) + 1;
}

for (let letra in frecuencia) {
    console.log(`${letra}=${frecuencia[letra]}`);
}
