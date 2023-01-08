// const fs = require('fs');

// console.log('Antes de Ler');

//forma de ler arquivos sincrono

// const a = fs.readFileSync('texto.txt').toString();

// console.log(a);


// forma de ler arquivos assincronos

// fs.readFile('texto.txt', (erro, data) => {
//     if (erro) {
//         console.log('Arquivo não encontrado.');
//     } else {
//         console.log(data.toString());
//     }
// })

// leitura com promises

const fs = require('fs/promises');

console.log('Antes de Ler');

const a = fs.readFile('texto.txt');

a.then((data) => {
    console.log(data.toString());
}).catch((erro) => {
    console.log('Arquivo não encontrado.');
});




console.log('Depois de Ler');