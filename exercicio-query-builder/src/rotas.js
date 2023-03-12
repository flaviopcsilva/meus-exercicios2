const express = require('express')
const { listarUsuarios, cadastrarUsuario, detalharUsuario, atualizar, deletar } = require('./controladores/usuarios')

const rotas = express()

rotas.get('/usuario', listarUsuarios)
rotas.post('/usuario', cadastrarUsuario)
rotas.get('/usuario/:id', detalharUsuario)
rotas.put('/usuario/:id', atualizar)
rotas.delete('/usuario/:id', deletar)

module.exports = rotas