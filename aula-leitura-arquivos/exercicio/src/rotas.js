const express = require('express');
const { listarProdutos, venda } = require('./controladores/vendas');

const rotas = express();

rotas.get('/produtos', listarProdutos);
rotas.post('/produtos', venda);

module.exports = rotas;