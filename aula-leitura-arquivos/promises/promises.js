const fsPromises = require('fs/promises');

console.log('Antes de ler!');

// const a = fsPromises.readFile('texto.txt');

// a.then((data) => {
//     console.log(data.toString());
// }).catch((erro) => {
//     console.log('Arquivo inválido.');
// })

// ou

(async function () {
    const a = await fsPromises.readFile('texto.txt');
    console.log(a.toString());
})()