//criar uma função para cumprimentar alguém
function cumprimentar(pessoa, idade) {
    //const pessoa ="José"; declarei a variável dentro do parametro
    console.log(`Olá ${pessoa} ! Fiquei sabendo que você tem ${idade} anos.`);

}

// a variavél pessoa só existe dentro da função
const nome = "Carlos";
cumprimentar("José", 30); //Esse valor se chama de argumento
cumprimentar("Flávio", 41);
cumprimentar("Maria", 18);
cumprimentar(nome, 26);