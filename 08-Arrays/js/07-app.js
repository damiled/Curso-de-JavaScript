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

const producto4 = {
    nombre: 'Celular 2',
    precio: 100
}


carrito.push(producto2);
carrito.push(producto);
carrito.push(producto4);

const producto3 = {
    nombre: 'Teclado',
    precio: 50
}

carrito.unshift(producto3);

console.table(carrito);


// // ELiminar último elemento de un arreglo
// carrito.pop();

// console.table(carrito);

// // Eliminar del inicio del arreglo
// carrito.shift();
// console.table(carrito);

carrito.splice(0, 1);
console.table(carrito);