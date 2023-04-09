const express = require('express')
const { cadastrarUsuario, listarUsuarios } = require('./controladores/usuarios')
const intermediarioCadastrarUsuario = require('./intermediarios/intermediariocadastrarusuario')

const rotas = express()

rotas.get('/usuarios', listarUsuarios)
rotas.post('/usuario', intermediarioCadastrarUsuario, cadastrarUsuario)


module.exports = rotas