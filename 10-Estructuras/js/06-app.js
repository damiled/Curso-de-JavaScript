const usuario = false;
const puedePagar = false;

// if(usuario) {
//     console.log('Si puedes comprar')
// } else {
//     console.log('No puedes comprar')
// }

if(usuario && puedePagar) {
    console.log('Si puedes comprar')
} else if(!puedePagar && !usuario) {
    console.log('No, no puedes comprar')

} else if(!usuario) {
    console.log('Inicia sesión o crea una cuenta')

} else if(!puedePagar) {
    console.log('Fondos Insuficientes')  
}