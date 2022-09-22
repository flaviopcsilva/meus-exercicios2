const produtos = [
  {
    nome : "Pão",
    precounit : 1000,
    quantidade : 3
  }, {
    nome : "Queijo",
    precounit : 5000,
    quantidade : 5
  }, {
    nome : "Leite",
    precounit : 9000,
    quantidade : 3
  }
  
  ]; 

/*const cartao = {
  nome = "Flavio",
  idade : 41,
  produtos : [
   {
    nome : "Pão",
    precounit : 100,
    quantidade : 3
   }, {
    nome : "Queijo",
    precounit : 500,
    quantidade : 5
   }, {
    nome : "Leite",
    precounit : 900,
    quantidade : 3
   }
    ]
};*/

let total = 0;

for (let i = 0; i<produtos.length; i++){
  total += produtos[i].precounit * produtos[i].quantidade;
}
/*console.log (`Cliente : ${cartao.nome}
total a pagar : ${total}`); */
console.log(produtos);
console.log(total/1000);