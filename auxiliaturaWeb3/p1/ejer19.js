// 19. Crear un objeto cuentaBancaria con saldo y métodos depositar y retirar (usar
// condicional si no hay saldo suficiente).
const cuentaBancaria = {
    saldo: 1000, 

    depositar(cantidad) {
        this.saldo = this.saldo + cantidad;
        console.log(`Depositaste ${cantidad}, Saldo actual: ${this.saldo}`);
    },

    retirar(cantidad) {
        if (cantidad > this.saldo) { 
            console.log("No hay saldo suficiente");
        } else {
            this.saldo = this.saldo - cantidad;
            console.log(`Retiraste ${cantidad}, Saldo actual: ${this.saldo}`);
        }
    }
};
cuentaBancaria.depositar(500);
cuentaBancaria.retirar(2000); 
cuentaBancaria.retirar(300);
