function contadorDePalavras(texto) {
    // console.log(texto.length);
   // if (texto.length <= 5000) {
       // let arrayDeTexto = texto.trim().split(" ");
        //arrayDeTexto = arrayDeTexto.split(" ");
     //   console.log(arrayDeTexto.length);
   // }
   let arrayDeTexto=texto.trim().split(" ");
   let contador=0;
   for(i=0;i<arrayDeTexto.length;i++){
     if(arrayDeTexto[i]!=""){
       contador++;
     }
   }
   console.log(contador);


}

contadorDePalavras("Cuidado, pois usuarios as vezes deixam espacos vazios no fim do texto sem querer ");
//Ta dando 80% no hackerrank :(