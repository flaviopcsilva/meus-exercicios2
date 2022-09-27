function determinarFaixaEtaria(idade) {
    if (idade <= 21) {
        return "Jovem";
    } else if (idade > 65) {
        return "Idoso";
    } else
        return "Adulto";
}

function apresentar(pessoa) {
    const faixaEtaria = determinarFaixaEtaria(pessoa.idade);

    console.log(`Sou ${pessoa.nome},sou um(a) ${faixaEtaria} de ${pessoa.idade} de idade e sou ${pessoa.profissao}.`);

}

const pessoa1 = {
    nome: "Flávio",
    idade: 41,
    profissao: "DEV"
}
apresentar(pessoa1);