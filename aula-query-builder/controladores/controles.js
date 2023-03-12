
const knex = require('../conexao')

const addUsuario = async (req, res) => {
    try {
        const maria = {
            nome: 'Maria',
            email: 'maria@gmail.com',
            telefone: '(21)98855-5565'
        }

        const joao = {
            nome: 'João',
            email: 'joao@gmail.com',
            telefone: '(21)96985-5565'
        }
        const agenda = await knex('agenda').insert([maria, joao]).returning('*').debug()
        return res.json(agenda)
    } catch (error) {
        console.log(error.message)
    }


}
const atualizar = async (req, res) => {
    const { nome, email, telefone } = req.body
    const { id } = req.params
    const agendaAtualizada = await knex('agenda')
        .update({ nome, email, telefone })
        .where('id', id)
        .returning('*')
        .debug()


    return res.json(agendaAtualizada)
}

const deleteRegistro = async (req, res) => {

    const { id } = req.params
    const agendaExcluida = await knex('agenda')
        .del()
        .where('id', id)
        .returning('*')
        .debug()


    return res.json(agendaExcluida)
}

module.exports = {
    addUsuario,
    atualizar,
    deleteRegistro
}