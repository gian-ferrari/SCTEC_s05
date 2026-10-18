class ContaBancaria {
  constructor(titular, saldo) {
    this.titular = titular;
    this.saldo = saldo;
  }

  depositar(valor) {
    this.saldo = this.saldo + valor;
  }
  sacar(valor) {
    if (this.saldo >= valor) {
      this.saldo = this.saldo - valor;
    } else {
      console.log("Saldo insuficiente.");
    }
  }
  extrato() {
    console.log(
      `Titular: ${this.titular} | Saldo: R$ ${this.saldo.toFixed(2)}.`,
    );
  }
}

module.exports = ContaBancaria;
