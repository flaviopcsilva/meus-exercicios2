// Spread ...
// espalhas os objetos
// exemplo

const pessoa ={
  nome : "Flávio",
  idade : 41,
  cidade : "Rio de janeiro"
}

const endereco ={
  rua: "Rodrigues Campelo",
  numero : 47,
  complemento : "quadra 6"
};

const propriedadeFundida ={
  ... pessoa,
  ... endereco,
  bairro : "Campo grande"
};

console.log(propriedadeFundida);