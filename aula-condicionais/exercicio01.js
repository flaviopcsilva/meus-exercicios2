let valorDoProduto = 150;
const quantidadeDeParcelas = 1;

if (quantidadeDeParcelas === 1) {
    //comprou a vista com -10% de desconto
    valorDoProduto -= (valorDoProduto * 0.10).toFixed(2);
    console.log(`O Valor do produto com desconto a vista é R$ ${valorDoProduto}.`);
} else {
    //comprou parcelado
    valorDoProduto /= quantidadeDeParcelas;
    console.log(`O produto ficou dividido em ${quantidadeDeParcelas} parcelas de R$ ${valorDoProduto.toFixed(2)}.`);
}