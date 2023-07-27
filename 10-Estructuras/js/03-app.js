// Operador mayor que y menor que
const dinero = 500;
const totalAPagar = 300;

// Mayor que
if(dinero > totalAPagar) {
    console.log('Si, podemos pagar')
} else {
    console.log('Fondo Insuficientes')
}

//Menor que (no se recomienda)
if(dinero < totalAPagar) {
    console.log('Fondo Insuficientes')

} else {
    console.log('Si, podemos pagar')
}

// Mayor o igual
// const dinero = 300;
// const totalAPagar = 300;
if(dinero >= totalAPagar) {
    console.log('Si, podemos pagar')
} else {
    console.log('Fondo Insuficientes')
}