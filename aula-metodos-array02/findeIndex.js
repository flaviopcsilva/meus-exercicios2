const carros = [
    { nome: 'uno', marca: 'Fiat', ano: 2020, cor: 'Azul' },
    { nome: 'fox', marca: 'volwagem', ano: 2021, cor: 'Prata' },
    { nome: 'Ecosport', marca: 'Ford', ano: 2015, cor: 'Vermelho' },
    { nome: 'chevete', marca: 'chevrolet', ano: 1998, cor: 'preto' }
];

const resultado = carros.findIndex((carro) => {
    return carro.nome === 'Ecosport';
})

console.log(resultado);