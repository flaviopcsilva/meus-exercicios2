const imprimirDados = (funcaocallback) => {
    const nome = 'Flávio Peres';
    const idade = 41;
    funcaocallback(nome, idade);
}

const dados = (parametronome, parametroidade) => {
    console.log(`a funcção callback foi executada`);
    if (parametronome) {
        console.log(`Nome: ${parametronome}`);
    }
    if (parametroidade) {
        console.log(`Nome: ${parametroidade}`);
    }

}

imprimirDados(dados);