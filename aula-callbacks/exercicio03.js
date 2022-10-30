// const imprimirNomes = (array, callback) => {
//     const verificarStack = 'Back';
//     for (let item of array) {
//         if (callback(item.stack)) {
//             console.log(item.nome);
//         }
//     }
// }

//Pode ser assim:

const imprimirNomes = (array, callback) => {
    const lista = [];
    let indice = 0;

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            lista[indice] = array[i];
            indice++;
        }
    }

    return lista;

}

const usuarios = [
    {
        nome: 'Flávio',
        stack: 'Back'
    },
    {
        nome: 'Julio',
        stack: 'Front'
    },
    {
        nome: 'Sonia',
        stack: 'Front'
    },
    {
        nome: 'Joaquim',
        stack: 'Back'
    }
]
const digitar = require('prompt-sync')({ sigint: false });
let stack = digitar('Digite a Stack para procurar (Back ou Front): ');

// imprimirNomes(usuarios, (item) => {
//     return item === stack;
// })
const resultado = imprimirNomes(usuarios, (item) => {
    return item.stack === stack;
})

console.log(resultado);