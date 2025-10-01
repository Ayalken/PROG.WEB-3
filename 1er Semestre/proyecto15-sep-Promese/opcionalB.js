function elimina(arr) {
    return new Promise((resolve, reject) => {
    const impares = arr.filter(n => {
        n % 2 !== 0});
    if (impares.length > 0) {
        resolve(impares);
    } else {
        reject(arr);
    }
    });
}

async function ejecutar() {
    try {
    const r = await elimina([1, 2, 3, 4, 5, 5]);
    console.log(r);
    } catch (r) {
    console.log(r); 
    }
}

ejecutar();
