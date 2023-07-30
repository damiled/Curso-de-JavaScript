const autenticado = true;

if(autenticado === true ) {
    console.log('El usuario está autenticado')
}


// Ejemplo juego
const puntaje = 500;

// if(puntaje > 400) {
//     console.log('Excelente :)')
// } else if(puntaje > 300) {
//     console.log('Buen puntaje... felicidades')
// }

function revisarPuntaje() {
    if(puntaje > 400) {
        console.log('Excelente :)');
        return;
    } 
    
    if(puntaje > 300) {
        console.log('Buen puntaje... felicidades');
        return;
    }
}

revisarPuntaje();