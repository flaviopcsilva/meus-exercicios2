const texto = "cubos\newvelrabsocaeln"

function validar(input) {
    const linhas = input.trim().split("\n");
    const senhaCorreta = linhas[0];
    const senhaDigitada = linhas[1];

    let abrir = "";

    for (let caracter of senhaDigitada) {
        let letra = caracter;
        let temLetra = senhaCorreta.includes(letra);
        if (temLetra) {
            abrir += caracter;
        }

    }
    if (abrir === senhaCorreta) {
        console.log("SIM");
    } else {
        console.log("NÃO");
    }
    //console.log(abrir);

    // console.log(senhaCorreta, senhaDigitada);

}

validar(texto);
