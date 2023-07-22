// const meses = ['Enero', 'Febrero', 'Marzo'];

// // meses[3] = 'Abril';

// // Agregar al final del arreglo sin conocer la extensión del arreglo
// meses.push('Abril');
// meses.push('Mayo');

// console.table(meses);

const carrito = [];

// Definir un producto
const producto = {
    nombre: "Monitor 32 Pulgadas",
    precio: 400
}

const producto2 = {
    nombre: 'Celular',
    precio: 800
}


carrito.push(producto2);
carrito.table(producto);

const producto3 = {
    nombre: 'Teclado',
    precio: 50
}

carrito.unshift(producto3);

console.table(carrito);