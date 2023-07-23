const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

// const nombre = producto.nombre;
// console.log(producto.nombre);

//Destructuring
const { nombre, precio } = producto;

console.log(nombre);

//Destructuringcon arrays
const numeros = [10, 20, 30, 40, 50];

// const [primero, segundo, tercero] = numeros;

const [primero, ...tercero] = numeros;

console.log(tercero);