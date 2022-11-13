const array = [0, 1, 2, 3, 4, 5];

// let acumulador = array[0];

// for (let i = 1; i < array.length; i++) {
//     const elementoAtual = array[i];
//     acumulador += elementoAtual;
// }

const valorReduce = array.reduce((acumulador, elementoAtual, indice, array) => {
    return acumulador + elementoAtual;
}, 15)
const valorReduce2 = array.reduce((acumulador, elementoAtual, indice, array) => {
    return acumulador + elementoAtual;
})

console.log(valorReduce);
console.log(valorReduce2);