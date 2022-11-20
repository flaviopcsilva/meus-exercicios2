const lodash = require('lodash');
// const array = require('./array');
// ou
const { arrayNumeros, arrayLetras } = require('./array')

//const array = [1, 2, 4, 4, 5, 6, 7, 1, 99];

const arrayNumerosUnico = lodash.uniq(arrayNumeros);
const arrayLetrasUnico = lodash.uniq(arrayLetras);



// const arrayUnico = lodash.uniq(array);
console.log(arrayNumerosUnico.join(', '));
console.log(arrayLetrasUnico.join(', '));