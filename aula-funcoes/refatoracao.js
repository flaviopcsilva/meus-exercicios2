function apresentar(pessoa) {
    if (pessoa.idade < 25) {
        console.log(`Sou ${pessoa.nome},sou um(a) jovem de ${pessoa.idade} de idade e sou ${pessoa.profissao}.`);

    } else if (pessoa.idade >= 65) {
        console.log(`Sou ${pessoa.nome},sou um(a) idoso(a) de ${pessoa.idade} de idade e sou ${pessoa.profissao}.`);

    } else
        console.log(`Sou ${pessoa.nome},sou um(a) adulto(a) de ${pessoa.idade} de idade e sou ${pessoa.profissao}.`);

}

const pessoa1 = {
    nome: "Flávio",
    idade: 41,
    profissao: "DEV"
}

apresentar(pessoa1);

const pessoa2 = {
    nome: "Carlos",
    idade: 19,
    profissao: "Estudante"
}
apresentar(pessoa2);

