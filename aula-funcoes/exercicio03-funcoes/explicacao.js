// O conceito de função - criamos uma função sempre que nos deparamos
// com uma situação repetitiva, a fim de reaproveitar/reutilizar código

// função sem parâmetro - note que sempre será saudada a mesma pessoa, ou seja,
// a mensagem exibida sempre irá trazer o nome "Victor"
function saudacao() {
    console.log("Olá");
    console.log("Victor");
    console.log("Tudo bem ?");
}

// saudacao();

// Precisamos tornar essa função saudacao() dinâmica, ou seja, iremos adicionar
// a possibilidade de saudar qualquer pessoa, invés de sempre saudar a pessoa
// com o nome "Victor"

// função com parâmetro - note que agora temos uma função que é dinâmica, ou seja,
// a mensagem será exibida de acordo com o parâmetro passado
// no momento de instanciar/executar o método 
function saudacaoDinamica(nome) {
    console.log("Olá");
    console.log(nome);
    console.log("Tudo bem ?");
}

// saudacaoDinamica("Victor");
// saudacaoDinamica("José");

// Iremos criar uma função que necessitará de receber um objeto como parâmetro,
// o formato do objeto  deve ser, como no exemplo abaixo:

// {
//     "nome": "Victor",
//     "sobrenome": "Torres",
//     "idade": 26
// }

// A partir do objeto recebido, deveremos retornar a seguinte mensagem no console:

// `Olá Victor Torres, identificamos que você possui 26 anos`

function saudacaoComObjeto(objetoPessoa) {
    let { nome, sobrenome, idade } = objetoPessoa;
    console.log(`Olá ${nome} ${sobrenome}, identificamos que você possui ${idade} anos`)
}

let pessoa = {
    nome: "Victor",
    sobrenome: "Torres",
    idade: 26
}

// saudacaoComObjeto(pessoa);