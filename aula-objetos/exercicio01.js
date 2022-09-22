const pessoa = {
  nome : "Flávio",
  idade : 18,
  altura : 1.67,
  temCNH : true,
  apelidos : ["Flaviano", "Battousai", "Flavinho"]
};

let possuiCNH = pessoa.temCNH?"possui CNH":"não possui CNH";
/*if (pessoa.temCNH){
  console.log("possui CNH");
} else console.log("não possui CNH");
*/

console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}m, ${possuiCNH} e os apelidos:`);
for (let apelido of pessoa.apelidos){
  console.log(`- ${apelido}`);
}