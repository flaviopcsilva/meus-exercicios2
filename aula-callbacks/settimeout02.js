const imprimirMensagem = (nome, idade) => {
    console.log(`Olá ${nome}, você tem ${idade} anos.`);
}
setTimeout(imprimirMensagem, 2000, 'Flávio', 41);