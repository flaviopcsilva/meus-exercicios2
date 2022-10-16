const participantes = [12, 35, 26, 21, 41, 22];

function solucao(lista) {

    let temMaior = false;
    //const indice = lista.length;
    //console.log(indice);
    let menorIdade = Math.max(...lista);
    //console.log(menorIdade);

    for (let pessoa of lista) {
        if (pessoa >= 18) {
            temMaior = true;
            if (pessoa < menorIdade) {
                menorIdade = pessoa;
            }
        }
    }
    if (temMaior) {
        console.log(menorIdade);
    } else {
        console.log("CRESCA E APARECA");
    }

}

solucao(participantes);

