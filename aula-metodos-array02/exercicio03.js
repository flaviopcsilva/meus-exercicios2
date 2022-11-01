const carros = [
    { nome: 'uno', marca: 'Fiat', ano: 2020, cor: 'Azul' },
    { nome: 'fox', marca: 'volwagem', ano: 2021, cor: 'Prata' },
    { nome: 'Ecosport', marca: 'Ford', ano: 2015, cor: 'Vermelho' },
    { nome: 'chevete', marca: 'chevrolet', ano: 1998, cor: 'preto' }
];

const buscarCarro = (carro, arrayDeCarros) => {
    const resultado = arrayDeCarros.find((marcas) => {
        return marcas.marca === carro;
    });
    if (resultado === undefined) {
        console.log('Marca não encontrada.');
    } else {
        console.log(resultado);
    }

}

buscarCarro('Ford', carros);