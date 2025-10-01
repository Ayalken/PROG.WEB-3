// 12. Crear un objeto producto con nombre y precio, y una función flecha que devuelva
//un string con esa información.
const producto = {
  nombre: "Laptop",
  precio: 1200
};

const mostrarProducto = (prod) => {
  return `Producto: ${prod.nombre}, Precio: ${prod.precio}`;
};

console.log(mostrarProducto(producto));
