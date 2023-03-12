const { response } = require('express')
const knex = require('./conexao')



async function teste() {
    let res = document.getElementById('result')
    let idade = document.getElementById('name')
    try {


        // res.innerHTML = idade.value
        const listar = await knex('usuarios')
        console.log(listar)

        return res.innerHTML = 'oi'

    } catch (error) {
        console.log(error.message)
    }
}
const teste1 = (resultado) => {

    let res = document.getElementById('result')
    res.innerHTML = 'oi'
}
const detalharUsuario = async (req, res) => {


    try {
        const listar = await knex('usuarios').debug()

        return res.json(listar)

    } catch (error) {
        console.log(error.message)
    }

}

module.exports = {
    detalharUsuario
}