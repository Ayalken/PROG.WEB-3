//3. Crear dos promesas que devuelvan números distintos y usar Promise.all para
//sumarlos.
const promesa1 = new Promise((resolve, reject) => {
    resolve(10);
});

const promesa2 = new Promise((resolve, reject) => {
    resolve(20);
});

Promise.all([promesa1, promesa2]).then((n) => {
    const s = n[0] + n[1];
    console.log("La suma es:", s);
});
