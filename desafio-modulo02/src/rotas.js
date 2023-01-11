const express = require('express');
const { listarContas, cadastrarConta, deposito, atualizarConta } = require('./controladores/operacoes-bancarias');

const rotas = express.Router();

rotas.get('/contas', listarContas);
rotas.post('/contas', cadastrarConta);
rotas.post('/transacoes/depositar', deposito);
rotas.put('/contas/:numeroConta/usuario', atualizarConta);

module.exports = rotas;