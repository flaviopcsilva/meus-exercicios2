const exercicioCallbak = (callback) => {
    const nome = 'Flávio Peres';
    const idade = 41;
    callback(nome, idade);
}

const dados = (parametroNome, parametroIdade) => {
    let anoAtual = new Date().getFullYear();
    if (parametroIdade) {
        anoAtual -= parametroIdade;
        console.log(`Nome: ${parametroNome}\nIdade: ${parametroIdade}\nAno de Nascimento: ${anoAtual}`);
    } else
        console.log(`Nome: ${parametroNome}`);
}

exercicioCallbak(dados);