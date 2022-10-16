function solucao(input) {

    // let letra = input.slice(1, 2);
    // if (letra === letra.toUpperCase()) {
    //     console.log("letra maiuscula");
    //     letra = input.slice(0, 1).toUpperCase() + input.slice(1).toLowerCase();
    //     console.log(letra);

    // } else {
    //     console.log("letra minuscula");
    //     letra = input.slice(0, 1) + input.slice(1).toLowerCase();
    //     console.log(letra);
    // }

    // const arrayLetra = input.split("");
    // let letra = "";
    // if (input === input.toLowerCase()) {
    //     console.log(input);
    // } else {
    //     letra = arrayLetra[0].toUpperCase();
    //     for (let i = 1; i < arrayLetra.length; i++) {
    //         letra += arrayLetra[i].toLowerCase();
    //     }
    //     console.log(letra);
    // }


    let letraFormatada = "";
    const primeiraLetra = input.slice(0, 1);
    const restoDaPalavra = input.slice(1);
    //console.log(restoDaPalavra);

    if (primeiraLetra === primeiraLetra.toLowerCase() && restoDaPalavra === restoDaPalavra.toUpperCase()) {
        letraFormatada = primeiraLetra.toUpperCase() + restoDaPalavra.toLowerCase();
        console.log(letraFormatada);
    } else {
        console.log(input);
    }


}

solucao("letra");