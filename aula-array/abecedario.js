const letra = "m";
const palavras = ["figo", "mamao", "melao", "maca", "uva", "melancia", "laranja"];
let contador = 0;
for (let palavra of palavras) {
    const primeiraLetra = palavra[0];
    if (primeiraLetra !== letra) {
        contador++
    }
    // console.log(palavra);
}
console.log(contador);