const { getCityFromZipcode, getStateFromZipcode } = require('utils-playground');

const cidade = getCityFromZipcode('23040550').then(cidade => {
    console.log(cidade);
}).catch(erro => {
    if (erro) {
        console.log('CEP Inválido.')
    }
})

const estado = getStateFromZipcode('23040550').then(estado => {
    console.log(estado);
}).catch(erro => {
    if (erro) {
        console.log('CEP Inválido.')
    }
})