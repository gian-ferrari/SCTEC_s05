class Pizza {
  constructor(sabor, tamanho, borda) {
    this.sabor = sabor;
    this.tamanho = tamanho;
    this.borda = borda;
  }

  calculaPreço() {
    let preco = 0;

    if (this.tamanho === "P") {
      preco = 25;
    } else if (this.tamanho === "M") {
      preco = 35;
    } else if (this.tamanho === "G") {
      preco = 50;
    }

    if (this.borda) {
      preco = preco + 8;
    }
    return preco;
  }
  resumo() {
    let precoFinal = this.calculaPreço();
    let textoBorda = this.borda ? "Com" : "Sem";
    console.log(
      `Pizza: Sabor: ${this.sabor} | Tamanho: ${this.tamanho} | Borda: ${textoBorda} | Valor Final: R$ ${precoFinal.toFixed(2)}.`,
    );
  }
}

const pizza1 = new Pizza("Portuguesa", "G", "false");
pizza1.resumo();
