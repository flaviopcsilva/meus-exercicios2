// function saudacao(callback) {
//     const nome = 'Flávio';
//     callback(nome);
// }

//Criando uma ArrayFunction
const saudacao = (callback) => {
    const nome = 'Flávio';
    callback(nome);
}

// function mensagem(nome) {
//     console.log(`Bem vindo ${nome}`);
// }

saudacao(nome => {
    console.log(`Bem vindo ${nome}`);
});