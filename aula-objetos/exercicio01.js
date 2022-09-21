const pessoa = {
  nome : "Flávio",
  idade : 18,
  altura : 1.67,
  temCNH : true,
  apelidos : ["Flaviano", "Battousai"]
};

let possuiCNH = "";

if (pessoa.temCNH){
  console.log("possui CNH");
} else console.log("não possui CNH");

console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}m, ${possuiCNH} e os apelidos:
${pessoa.apelidos}`);