// arreglo público
//let arreglo = [1, 2, 3, 4, 5];
let arreglo=[2,4,6]
const promesaImpares = new Promise((resolve, reject) => {
  const impares = arreglo.filter(n => n % 2 !== 0);
  if (impares.length > 0) {
    resolve(impares);
  } else {
    reject(arreglo);
  }
});
promesaImpares.then(res => {
  console.log(res)}
).catch(err => {
  console.log(err)});