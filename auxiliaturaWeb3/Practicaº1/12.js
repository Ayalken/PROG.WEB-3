/*12. Crear un objeto producto con nombre y precio, y una función flecha que devuelva
un string con esa información.*/
const producto={
    nombre:"Amoladora",
    precio:140
};
const mostrarProducto=(producto)=>{
    return `El producto ${producto.nombre} cuesta ${producto.precio}bs`
}
console.log(mostrarProducto(producto))