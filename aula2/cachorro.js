const Animal = require("./animal.js");

class Cachorro extends Animal {
  constructor(nome, idade, raca) {
    super(nome, idade, raca);
  }

  latir() {
    console.log("Au Au Au");
  }
}

const cao = new Cachorro("Rex", 6, "SRD");

cao.comer();
cao.latir();
