// for( let i = 0; i <= 10; i++ ) {
//     console.log(`Numero: ${i}`)
// }

// for( let i = 1; i <= 20; i++ ) {
//     if( i % 2 === 0 ) {
//         console.log(`El número ${i} es PAR`);
//     } else {
//         console.log(`El número ${i} es IMPAR`);
//     }
// } 

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 400 },
    { nombre: 'Smart TV', precio: 900 },
    { nombre: 'iPad', precio: 500 },
    { nombre: 'iPhone 13', precio: 1300 },
    { nombre: 'Airpods', precio: 300 },
    { nombre: 'Teclado Razer', precio: 200 },
]

console.log( carrito.length )

for( let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);
}