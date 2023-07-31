// for( let i = 0; i <= 10; i++ ) {

//     if(i === 5) {
//         console.log('Cinco');
//         continue;
//     }

//     console.log(`Numero: ${i}`)
// }

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 400 },
    { nombre: 'Smart TV', precio: 900 },
    { nombre: 'iPad', precio: 500, descuento: true },
    { nombre: 'iPhone 13', precio: 1300 },
    { nombre: 'Airpods', precio: 300 },
    { nombre: 'Teclado Razer', precio: 200 },
]

for( let i = 0; i < carrito.length; i++) {
    if(carrito[i].descuento) {
        console.log(`El artículo ${carrito[i].nombre} Tiene descuento`);
        continue;
    }
    console.log(carrito[i].nombre)
}