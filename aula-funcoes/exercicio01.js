const pessoaObj = {
    nome: "Flávio",
    idade: 41,
    profissao: "DEV",
    altura: 1.67
};
function apresentar(pessoa) {
    if (pessoa.idade < 25) {
        console.log(`Olá! Meu nome é ${pessoa.nome}, sou um jovem de ${pessoa.idade} anos, ${pessoa.altura} de altura e sou ${pessoa.profissao}.`);
    } else if (pessoa.idade > 64) {
        console.log(`Olá! Meu nome é ${pessoa.nome}, sou um idoso de ${pessoa.idade} anos, ${pessoa.altura} de altura e sou ${pessoa.profissao}.`);

    } else
        console.log(`Olá! Meu nome é ${pessoa.nome}, sou um adulto de ${pessoa.idade} anos, ${pessoa.altura} de altura e sou ${pessoa.profissao}.`);

};

apresentar(pessoaObj);