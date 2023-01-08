const produtos = require('../dados/produtos');
const fs = require('fs/promises');

const listarProdutos = async (req, res) => {
    return res.status(200).json(produtos);
};

const venda = async (req, res) => {
    const { produto_id, quantidade } = req.body;

    const produtoEncontrado = produtos.find((produto) => {
        return produto.id === Number(produto_id);
    });

    if (!produtoEncontrado) {
        return res.status(404).json({ Mensagem: 'Produto Não Cadastrado.' })
    }

    try {

        const venda = await fs.readFile('./src/dados/vendas.json');

        const parseVendas = JSON.parse(venda);

        parseVendas.vendas.push({
            produto: produtoEncontrado,
            quantidade
        });

        await fs.writeFile('./src/dados/vendas.json', JSON.stringify(parseVendas));

        return res.status(201).json('Venda Registrada com sucesos.');


    } catch (erro) {
        return res.status(500).json(`Erro do Servidor.`)
    }

}

module.exports = {
    listarProdutos,
    venda
}