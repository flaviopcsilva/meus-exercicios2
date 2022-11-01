const frutas = ['abacaxi', 'manga', 'melancia'];
const numeros = [1, 2, 3, 4, 5];

// const resultado = frutas.every((elementoatual) => {
//     return elementoatual != 'manga';
// });

const resultado = numeros.every((numero) => {
    return numero < 5;
});

console.log(resultado);