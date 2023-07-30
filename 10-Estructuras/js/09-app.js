const autenticado = false;
const puedePagar = true;

// console.log( autenticado ? 'Sí, está autenticado' : 'No, no está autenticado' );
// console.log( autenticado ? 'Sí, está autenticado' : null );

console.log( autenticado && puedePagar ? 'Sí, puede pagar' : 'No, no está autenticado' );

console.log( autenticado ? puedePagar ? 'Si está autenticado y puede pagar' : 'Si autenticado, no puede pagar' : 'No está autenticado' );