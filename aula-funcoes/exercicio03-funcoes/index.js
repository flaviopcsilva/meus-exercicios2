const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    imprimirResumo: function () {
        const { nomeDoCliente, produtos } = this;


        console.log(`
            Cliente: ${nomeDoCliente} \n
            Total de itens: ${this.calcularTotalDeItens()} itens \n
            Total a pagar: R$ ${this.calcularTotalAPagar() / 100}
        `);
    },
    addProduto: function (produto) {
        let { produtos } = this;
        let achou = false;

        for (const item of produtos) {
            if (item.id == produto.id) {
                item.qtd += produto.qtd;
                achou = true;
            }
        }

        if (!achou) {
            produtos.push(produto);
        }
    },
    imprimirDetalhes: function () {
        let { nomeDoCliente, produtos } = this;
        console.log(`Cliente: ${nomeDoCliente}`);

        let contadorDeItens = 1;
        for (const produto of produtos) {
            let { nome, precoUnit, qtd } = produto;

            console.log(`Item ${contadorDeItens} - ${nome} - ${qtd} und - R$ ${(precoUnit * qtd) / 100}`)
            contadorDeItens++;
        }

        console.log(`Total de itens: ${this.calcularTotalDeItens()} itens`);
        console.log(`Total a pagar: R$ ${this.calcularTotalAPagar() / 100}`);
    },
    calcularTotalDeItens: function () {
        const { produtos } = this;
        let totalDeItens = 0;

        for (const produto of produtos) {
            totalDeItens += produto.qtd
        }

        return totalDeItens;
    },
    calcularTotalAPagar: function () {
        const { produtos } = this;
        let totalAPagar = 0;

        for (const produto of produtos) {
            let { precoUnit, qtd } = produto;
            totalAPagar += (precoUnit * qtd)
        }

        return totalAPagar;
    },
    // O primeiro é um desconto em que, para compras acima de 4 itens, o item mais barato sai de graça.
    // O segundo é um desconto de 10% para compras acima de 100 reais.
    // Sempre no máximo um deles será aplicado - o que for mais vantajoso para o cliente.
    // Para o exemplo da letra B, o desconto deverá ser de R$ 30,00.
    // Para o exemplo da letra E, com 8 itens, o desconto deverá ser de R$ 44,00.
    calcularDesconto: function () {
        let { produtos } = carrinho;
        let totalAPagar = this.calcularTotalAPagar() / 100;
        let totalDeItens = this.calcularTotalDeItens();

        let descontoTotalPorItens = 0;
        let descontoTotalPorValor = 0;

        if (totalDeItens > 4) {
            descontoTotalPorItens = produtos[0].precoUnit / 100;
            for (const produto of produtos) {
                if (produto.precoUnit < descontoTotalPorItens) {
                    descontoTotalPorItens = produto.precoUnit / 100;
                }
            }
        }

        if (totalAPagar > 100) {
            descontoTotalPorValor = totalAPagar * 0.1;
        }

        return descontoTotalPorItens > descontoTotalPorValor ? descontoTotalPorItens : descontoTotalPorValor;
    }
}

const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}

// carrinho.addProduto(novaBermuda);
// carrinho.imprimirResumo();

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}

// carrinho.addProduto(novoTenis);
// carrinho.imprimirResumo();

// carrinho.imprimirDetalhes();
// carrinho.calcularDesconto();

console.log(carrinho.calcularDesconto());