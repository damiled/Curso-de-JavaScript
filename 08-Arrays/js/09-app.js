const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 400 },
    { nombre: 'Smart TV', precio: 900 },
    { nombre: 'IPad', precio: 500 },
    { nombre: 'Iphone 13', precio: 1300 },
    { nombre: 'Airpods', precio: 300 },
    { nombre: 'Teclado Razer', precio: 200 },
]

for(let i = 0; i < carrito.length; i++ ) {
    console.log( `${carrito[i].nombre} - Precio: ${carrito[i].precio}` );
}

carrito.forEach( function(producto) {
    console.log( `${producto.nombre} - Precio: ${producto.precio}` );
} );