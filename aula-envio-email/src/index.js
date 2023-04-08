require('dotenv').config()
const express = require('express')
const { login, teste } = require('./controladores/login')


const app = express()

app.use(express.json())

app.post('/login', login)

app.get('/', teste)

app.listen(process.env.PORT_SERVER, () => {
    console.log(`Servidor iniciado com sucesso na porta ${process.env.PORT_SERVER}`)
})