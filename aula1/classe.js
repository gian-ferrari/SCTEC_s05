class Aluno {
    constructor (nome, idade, sobrenome) {
        this.nome = nome;
        this.idade = idade;
        this.sobrenome = sobrenome;
    }

    fazerProva () {
        console.log ("O aluno " + this.nome + " " + this.sobrenome + " está fazendo a prova.");
    }
}

const aluno1 = new Aluno ("Gelso", 30, "Campos");
const aluno2 = new Aluno ("Gian", 44, "Ferrari");

console.log (aluno1);
console.log (aluno2);

aluno1.fazerProva();
aluno2.fazerProva();