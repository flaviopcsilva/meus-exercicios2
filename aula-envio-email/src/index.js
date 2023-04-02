const express = require('express')
const { login } = require('./controladores/login')
require('dotenv').config()

const app = express()

app.use(express.json())

app.post('/login', login)

app.get('/')

app.listen(process.env.PORT_SERVER, () => {
    console.log(`Servidor iniciado com sucesso na porta ${process.env.PORT_SERVER}`)
})