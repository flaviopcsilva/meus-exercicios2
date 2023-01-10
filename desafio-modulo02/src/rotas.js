const express = require('express');
const { listarContas, cadastrarConta } = require('./controladores/operacoes-bancarias');

const rotas = express.Router();

rotas.get('/contas', listarContas);
rotas.post('/contas', cadastrarConta);

module.exports = rotas;