const producto = '      Monitor 20 pulgadas         '

console.log(producto);
console.log(producto.length);

// Eliminar espacio del inicio...
console.log(producto.trimStart());

// Eliminar espacio del final...
console.log(producto.trimEnd());

// Eliminar ambos espacios...
console.log(producto.trimStart().trimEnd());
console.log(producto.trim());