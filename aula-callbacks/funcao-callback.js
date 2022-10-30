const somar = (primeiroNumero, segundoNumero, callback) => {
    const resultado = primeiroNumero + segundoNumero;
    callback(resultado);
}
const primeiro = require('prompt-sync')({ sigint: false });
const segundo = require('prompt-sync')({ sigint: false });
let x, y;

somar(x = parseInt(primeiro('Qual o primeiro numero: ')), y = parseInt(primeiro('Qual o segundo numero: ')), (resultado) => {
    console.log(`A soma é ${resultado}`)
});