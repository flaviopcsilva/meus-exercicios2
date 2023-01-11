const express = require('express');
const { listarContas, cadastrarConta, deposito } = require('./controladores/operacoes-bancarias');

const rotas = express.Router();

rotas.get('/contas', listarContas);
rotas.post('/contas', cadastrarConta);
rotas.post('/transacoes/depositar', deposito);

module.exports = rotas;