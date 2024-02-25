function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function () {
    // console.log(this.saldo)

    let tipo;

    if(this.saldo > 10000) {
        tipo = 'Gold'
    } else if(this.saldo > 5000) {
        tipo = 'Platinum'
    } else {
        tipo = 'Normal'
    }
    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function () {
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`
}

Cliente.prototype.retiraSaldo = function(retira) {
    this.saldo -= retira
}


function Personal(nombre, saldo, telefono) {
    
}

// Instanciarlo
const chop = new Persona('Chop', 5000, 10920192);
console.log(chop)