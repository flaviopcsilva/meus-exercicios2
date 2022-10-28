const nome = require('prompt-sync')({ sigint: false });

const nome2 = require('prompt-sync')({ sigint: false });
const array = [];
let teste;
while (teste != "Sair") {
    teste = nome("Digite um número ou Sair: ");
    if (teste === "Sair") {
        break;
    }
    if (teste === "") {
        console.log("Não pode ser valor em branco.");
    } else {
        array.push(teste);
    }
}
console.log(array.join(", "));





