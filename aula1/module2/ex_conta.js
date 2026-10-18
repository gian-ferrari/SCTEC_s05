const ContaBancaria = require("./contaBancaria.js");


const saldo = 0;
const conta = new ContaBancaria ("João", saldo);

conta.depositar(500);
conta.sacar(501);

conta.extrato();