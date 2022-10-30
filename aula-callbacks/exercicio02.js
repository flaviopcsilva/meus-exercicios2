const imc = (altura, peso, callback) => {
    const resultadoImc = peso / (Math.pow(altura, 2));
    callback(resultadoImc);
}

const alturaDigitada = require('prompt-sync')({ sigint: false });
const pesoDigitado = require('prompt-sync')({ sigint: false });
let x, y;

imc(x = alturaDigitada('Digite a altura: '), y = pesoDigitado('Digite o peso: '), (resultadoImc) => {
    if (resultadoImc < 18) {
        console.log(`IMC= ${resultadoImc}\nResultado: Desnutrido.`);
    } else if (resultadoImc >= 18 && resultadoImc <= 25) {
        console.log(`IMC= ${resultadoImc}\nResultado: Normal.`);
    } else
        console.log(`IMC= ${resultadoImc}\nResultado: Sobrepeso.`)
})