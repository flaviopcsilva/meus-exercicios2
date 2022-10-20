const texto = "FlavioCardoso\nFflewvelrabvsioclkaelrndskokjsjero"

function validar(input) {
  //  const linhas = input.split("\n")[0];
    const senhaCorreta = input.split("\n")[0];
    const senhaDigitada = input.split("\n")[1];

    let abrir = "";
    let contador=0;
    for(i=0;i<senhaCorreta.length;i++){
      for(j=contador;j<senhaDigitada.length;j++){
        if(senhaCorreta[i]===senhaDigitada[j]){
          abrir+=senhaDigitada[j];
          contador=j;
          break;
        }
      }
    }
   /* for (let letraSenha of senhaCorreta) {
        for (let letraDigitada of senhaDigitada) {

            if (letraSenha === letraDigitada) {
                abrir += letraSenha;
                break;
            }
        }
    }*/
    if (abrir === senhaCorreta) {
        console.log("SIM");

    } else {
        console.log("NAO");
    }

}

validar(texto);
validar("cubos\nucccuuuggbyoos")
