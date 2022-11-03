const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 4, 3, 3, 4, 2, 5, 8, 9];

const nomes = ['Flávio', 'Carlos', 'Flávio', 'Maria'];

const resultadoNome = nomes.filter((nome) => {
    return nome === 'Flávio';
})

const resultado = numeros.filter((numero) => {
    return numero >= 3;
})

console.log(resultado);
console.log(resultadoNome);