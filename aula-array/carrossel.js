const sequencia = ">>><>";
let posicao = 0;
for (let indice of sequencia) {

    if (indice === ">") {
        posicao++;
    } else {
        posicao--;

    }
    if (posicao < 0) {
        posicao = 6;
    } else if (posicao > 6) {
        posicao = 0;
    }
}
console.log(posicao);