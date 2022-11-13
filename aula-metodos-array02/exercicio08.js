const usuarios = [
    { id: 11, nome: 'joão', idade: 23 },
    { id: 2, nome: 'maria', idade: 40 },
    { id: 4, nome: 'carlos', idade: 18 },
    { id: 1, nome: 'bira', idade: 43 },
    { id: 123, nome: 'flavio', idade: 41 }
];

const maiorIdade = usuarios.reduce((acumulador, elementoAtual) => {
    let maior = acumulador;

    if (elementoAtual.idade > maior.idade) {
        maior = elementoAtual;
    }
    return maior;

});

console.log(maiorIdade);