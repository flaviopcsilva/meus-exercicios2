const express = require('express');
const { listarUsuarios, cadastrarUsuario } = require('./controladores/usuarios_controladores');

const rotas = express.Router();

rotas.get('/usuarios', listarUsuarios);
rotas.post('/usuarios', cadastrarUsuario);

module.exports = rotas;