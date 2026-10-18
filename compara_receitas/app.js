const despensa = require("./despensa");
const receitas = require("./bd_receitas");
const receitasSobremesa = require("./bd_receitas_sobremesa");
const Receita = require("./receita");
const ReceitaSobremesa = require("./receita_sobremesa");

function buscaDespensa() {
  return new Promise((resolve, reject) => {
    console.log("Buscando itens disponíveis na despensa...");
    // simula fetch dos dados na api de despensa
    setTimeout(() => {
      if (despensa != null && despensa.length > 0) {
        resolve(despensa);
      } else {
        reject("Não foi possível carregar os itens da despensa!");
      }
    }, 1000);
  });
}

function buscaReceitas() {
  return new Promise((resolve, reject) => {
    console.log("Buscando receitas cadastradas...");
    setTimeout(() => {
      if (receitas !== null && receitas.length > 0) {
        resolve(receitas);
      } else {
        reject("Não foi possível carregar as receitas!");
      }
    }, 2000);
  });
}

function buscaReceitasSobremesa() {
  return new Promise((resolve, reject) => {
    console.log("Buscando receitas de sobremesa cadastradas...");
    setTimeout(() => {
      if (receitasSobremesa !== null && receitasSobremesa.length > 0) {
        resolve(receitasSobremesa);
      } else {
        reject("Não foi possível carregar as receitas de sobremesa!");
      }
    }, 2000);
  });
}

async function main() {
  try {
    const receitasResponse = await buscaReceitas();
    const listaReceitas = receitasResponse.map(
      (receitaObj) =>
        new Receita(
          receitaObj.nome,
          receitaObj.ingredientes,
          Number(receitaObj.minutos),
        ),
    );

    const receitasSobremesaResponse = await buscaReceitasSobremesa();
    const listaReceitasSobremesa = receitasSobremesaResponse.map(
      (receitaObj) =>
        new ReceitaSobremesa(
          receitaObj.name,
          receitaObj.ingredients,
          Number(receitaObj.minutes),
          Number(receitaObj.chillTime),
        ),
    );

    const itensDisponiveisDespensa = await buscaDespensa();

    console.log("------");
    console.log("Comparando receitas com os itens disponíveis:");
    console.log("");
    listaReceitas.forEach((receita) => {
      receita.exibirDetalhes();
      receita.compararIngredientes(itensDisponiveisDespensa);
    });

    console.log("------");
    console.log("Comparando receitas de sobremesa com os itens disponíveis:");
    console.log("");
    listaReceitasSobremesa.forEach((receita) => {
      receita.exibirDetalhes();
      receita.compararIngredientes(itensDisponiveisDespensa);
      receita.tempoTotal();
    });
  } catch (e) {
    console.log("Não foi possível carregar os dados. Erro: " + e);
  }
}

main();
