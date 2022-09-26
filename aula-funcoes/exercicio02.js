function determinarFaixaEtaria(idade) {
    if (idade <= 21) {
        return "Jovem";
    } else if (idade > 65) {
        return "Idoso";
    } else
        return "Adulto";
}

const faixaEtaria = determinarFaixaEtaria(25);
console.log(faixaEtaria);