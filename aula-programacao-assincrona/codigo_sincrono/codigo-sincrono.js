const { getCityFromZipcode } = require('utils-playground');

//PROGRAMAÇÃO SINCRONA
// console.log('Início');

// for (let index = 1; index <= 5; index++) {
//     console.log(index);
// };

// console.log('Fim');

//PROGRAMAÇÃO ASSINCRONA

// console.log('Início');



// getCityFromZipcode('23017120').then(cidade => {
//     console.log(cidade);
// })

// console.log('Fim');

getCityFromZipcode('2301710').then(cidade => {
    console.log(cidade);
}).catch(erro => {
    if (erro) {
        console.log('Cep não existente.');
    }
});

// console.log(cidade);