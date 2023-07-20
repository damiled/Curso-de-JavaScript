const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

producto.disponible = false;
delete producto.precio;
// const nombreProducto = 'Monitor';
// nombreProducto = 'Tablet';
// console.log(nombreProducto);

console.log(producto);