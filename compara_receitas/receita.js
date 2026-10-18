class Receita {
  constructor(nome, ingredientes, tempoPreparoMin) {
    this.nome = nome;
    this.ingredientes = ingredientes;
    this.tempoPreparoMin = tempoPreparoMin;
  }

  exibirDetalhes() {
    console.log(
      `Receita de ${this.nome}, usa ${this.ingredientes.length} ingredientes, e leva ${this.tempoPreparoMin} min.`,
    );
  }

  compararIngredientes(itensDisponiveis) {
    const possui = [];
    const falta = [];

    this.ingredientes.forEach((ingrediente) => {
      // opção 1... find
      const encontraddo = itensDisponiveis.find((item) => {
        return item.toLowerCase() === ingrediente.toLowerCase();
      });

      if (encontraddo) {
        possui.push(ingrediente);
      } else {
        falta.push(ingrediente);
      }

      /* opção 2.... filter

      const encontraddo = itensDisponiveis.filter((item) => {
        return item.toLowerCase() === ingrediente.toLowerCase();
      });

      if (encontraddo.length > 0) {
        possui.push(ingrediente);
      } else {
        falta.push(ingrediente);
      }*/

      /* opção 3... includes

      if (itensDisponiveis.includes(ingrediente)) {
        possui.push(ingrediente);
      } else {
        falta.push(ingrediente);
      }*/
    });

    if (possui.length > 0) {
      console.log(`Ingredientes disponíveis: ${possui.join(", ")}.`);
    } else {
      console.log("Nenhum ingrediente disponíveis!");
    }

    if (falta.length > 0) {
      console.log(`Ingredientes faltantes: ${falta.join(", ")}.`);
    } else {
      console.log("Todos ingredientes disponíveis!");
    }
  }
}

module.exports = Receita;
