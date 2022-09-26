const produtos = [
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
]; 

const cartao= {
  nome : "Flavio",
  idade : 41,
  produtos
}

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

/*for (let i = 0; i<produtos.length; i++){
  total += produtos[i].precounit * produtos[i].quantidade;
}*/ 
// pode ser assim tambem:

for (let produto of produtos){
  total += produto.precounit * produto.quantidade;
}

/*console.log (`Cliente : ${cartao.nome}
total a pagar : ${total}`); */
const totalFormatado = (total/100).toFixed(2);
console.log(`Sr(a) ${cartao.nome}, o total a pagar é R$ ${totalFormatado}.`);