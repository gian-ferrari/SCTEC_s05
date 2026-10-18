const Receita = require("./receita");

class ReceitaSobremesa extends Receita {
  constructor(nome, ingredientes, tempoPreparoMin, tempoDescansoMin) {
    super(nome, ingredientes, tempoPreparoMin);
    this.tempoDescansoMin = tempoDescansoMin;
  }

  tempoTotal() {
    if (
      Number.isNaN(this.tempoPreparoMin) ||
      Number.isNaN(this.tempoDescansoMin)
    ) {
      console.log(
        `Ocorreu um erro ao tentar calcular o tempo da receita de ${this.nome}`,
      );
    } else {
      console.log(
        `Tempo total de prepao: ${this.tempoPreparoMin + this.tempoDescansoMin} min.`,
      );
    }
  }
}

module.exports = ReceitaSobremesa;
