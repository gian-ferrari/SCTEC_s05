const Animal = require("./animal.js");

class Gato extends Animal {
  constructor(nome, idade, raca, cor) {
    super(nome, idade, raca);
    this.cor = cor;
  }

  miar() {
    console.log("miau-miau");
  }
}

const gato = new Gato("Bigode", 3, "SRD");

gato.comer();
gato.miar();