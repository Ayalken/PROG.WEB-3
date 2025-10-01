let carrito_productos = [];
let carrito_total = 0;

function agregar_producto(nombre, precio) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (carrito_productos.length < 5) {
                carrito_productos.push({ producto: nombre, precio: precio });
                carrito_total += precio;
            } else {
                console.log("Producto fuera de stock");
            }
            resolve();
        }, 1000);
    });
}

function mostrar_carrito() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Productos en carrito:");
            for (let i = 0; i < carrito_productos.length; i++) {
                console.log(`${carrito_productos[i].producto}: ${carrito_productos[i].precio}`);
            }
            resolve();
        }, 3000);
    });
}

function carrito_total_items() {
    let total = 0;
    let i = 0;
    while (i < carrito_productos.length) {
        total += carrito_productos[i].precio;
        i++;
    }
    return total;
}

function calcular_impuesto(impuesto) {
    return (carrito_total * impuesto) / 100;
}

async function miFuncion() {
    await agregar_producto("Camisa", 20);
    await agregar_producto("Pantalón", 30);
    await mostrar_carrito();
    console.log(`Total: ${carrito_total}`);
    console.log(`Impuesto (10%): ${calcular_impuesto(10)}`);
}

miFuncion();
