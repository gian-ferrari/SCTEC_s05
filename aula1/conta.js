class Conta {
    titular = "";
    saldo = 0;

    constructor (titular){
        this.titular = titular;
    }

    depositar(valor) {
        this.saldo = this.saldo + valor;
        console.log (`Depósito de R$ ${valor.toFixed(2)} no conta de ${this.titular} realizado com sucesso!`);
    }

    checarSaldo(){
        return this.saldo;
    }
}

const conta1 = new Conta ("João");
const conta2 = new Conta ("Gelson");

conta1.depositar(10);
conta2.depositar(25);

console.log(conta1.checarSaldo());
console.log(conta2.checarSaldo());