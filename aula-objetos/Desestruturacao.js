const pessoa = {
  nome : "Flávio",
  idade : 40,
  cidade : "Rio de janeiro",
  bairro : "Campo grande"
}

//const nome = pessoa.nome;
//const idade = pessoa.idade;
const {nome, idade, ... outros} = pessoa;


console.log(nome,idade);
console.log(outros);
