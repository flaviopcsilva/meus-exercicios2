const numeros = [1, 1, 1]

function solucao(numero) {

    let contador = 0;
    for (let item of numero) {
        contador += item;
    }


    let jogador = 0;
    while (contador > 0) {

        if (jogador === numero.length) {
            jogador = 0
        }
        jogador++;
        contador--;
    }
    console.log(jogador);

}

solucao(numeros);