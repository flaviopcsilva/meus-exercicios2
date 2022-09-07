let valorDoProduto = 100;
const quantidadeDeParcelas = 12;

if (quantidadeDeParcelas === 1) {
    //comprou a vista com -10% de desconto
    valorDoProduto -= (valorDoProduto * 0.10).toFixed(2);
    console.log(`O Valor do produto com desconto a vista é R$ ${valorDoProduto}.`);
} else if (quantidadeDeParcelas >= 2 && quantidadeDeParcelas <= 6) {
    //comprou parcelado em até 6 vezes
    valorDoProduto /= quantidadeDeParcelas;
    console.log(`O produto ficou dividido em ${quantidadeDeParcelas} parcelas de R$ ${valorDoProduto.toFixed(2)} sem juros.`);
} else if (quantidadeDeParcelas >= 7 && quantidadeDeParcelas <= 12) {
    //comprou parcelado com juros
    const taxaDeJuros = 0.01;
    const montante = (valorDoProduto * Math.pow((1 + taxaDeJuros), quantidadeDeParcelas)).toFixed(2);
    const parcelaComJuros = montante / quantidadeDeParcelas;
    console.log(`O valor total do produto com juros é de R$ ${montante}, e ficou em ${quantidadeDeParcelas} parcelas de R$ ${parcelaComJuros.toFixed(2)}`);
} else
    console.log("Número de parcelas inválido.");

