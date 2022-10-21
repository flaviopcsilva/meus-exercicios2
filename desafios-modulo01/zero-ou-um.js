const disputa = [
    {
        "nome": "Herman",
        "jogada": 1
    },
    {
        "nome": "Rhodes",
        "jogada": 0
    },
    {
        "nome": "Beach",
        "jogada": 0
    },
    {
        "nome": "Laurel",
        "jogada": 0
    },
    {
        "nome": "Beatrice",
        "jogada": 0
    },
    {
        "nome": "Alison",
        "jogada": 0
    },
    {
        "nome": "Saundra",
        "jogada": 0
    },
    {
        "nome": "Klein",
        "jogada": 0
    }
]

function solucao(jogadores) {

    let contadorDeZero = 0;
    let contadorDeUm = 0;
    let ganhador = "";
    for (let item of jogadores) {
        if (item.jogada === 0) {
            contadorDeZero++;
        } else {
            contadorDeUm++;
        }
    }
    if(contadorDeUm === 1) {

        for (let item of jogadores) {
            if (item.jogada === 1) {
                ganhador = item.nome;
            }
        }
    } else if (contadorDeZero === 1) {
        for (let item of jogadores) {
            if (item.jogada === 0) {
                ganhador = item.nome;
            }
        }
    } else {
        console.log("NINGUEM")
    }
    // console.log(contadorDeZero);
    // console.log(contadorDeUm);
    console.log(ganhador);

}

solucao(disputa);