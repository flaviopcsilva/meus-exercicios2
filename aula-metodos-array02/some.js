const nomes = ['joao', 'maria', 'josé', 'rodrigo', 'Flávio'];
const numeros = [1, 2, 5, 6, 7];

const resultadoCallback = (numero) => {
    return numero % 2 === 0;
}
const resultado = numeros.some(resultadoCallback);



// const resultado = nomes.some((nome) => {
//     return nome === 'maria';
// });

console.log(resultado);