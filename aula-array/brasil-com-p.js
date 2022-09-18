const primeiraLetra = "a";
const segundaLetra = "v";
const palavras = ["aveia", "manha", "ave",];

let nenhumaPalavra = true;

for (palavra of palavras) {
    const letra1 = palavra[0];
    const letra2 = palavra[1];
    if (letra1 === primeiraLetra && letra2 === segundaLetra) {
        console.log(palavra);
        nenhumaPalavra = false;
    }
}
if (nenhumaPalavra) {
    console.log("NENHUMA");
} 