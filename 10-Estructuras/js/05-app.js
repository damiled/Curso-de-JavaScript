// Switch case
const metodoPago = 'efectivo';

switch(metodoPago) {
    case 'efectivo':
        // console.log(`Pagaste con ${metodoPago}`);
        pagar();
        break;
    case 'cheque':
        console.log(`Pagaste con un ${metodoPago}`);
        break;
    case 'tarjeta':
        console.log(`Pagaste con un ${metodoPago}`);
        break;
    default:
        console.log('Aún no has seleccionado un método de pago o método de pago no soportado');
        break;
}

function pagar() {
    console.log('Pagando...')
}