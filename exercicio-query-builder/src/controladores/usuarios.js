
const { json } = require('express')
const knex = require('../conexao')

const listarUsuarios = async (req, res) => {
    try {
        const usuarios = await knex('usuario2').debug()
        return res.json(usuarios)
    } catch (error) {
        console.log(error.message)
    }

}

const cadastrarUsuario = async (req, res) => {
    const { nome, email, senha } = req.body
    if (!nome) {
        return res.status(400).json({ Mensagem: 'O campo nome é obrigatório.' })
    }
    if (!email) {
        return res.status(400).json({ Mensagem: 'O campo email é obrigatório.' })
    }
    if (!senha) {
        return res.status(400).json({ Mensagem: 'O campo senha é obrigatório.' })
    }

    try {
        const cadastrar = await knex('usuario2')
            .insert({ nome, email, senha })
            .returning('*')
            .debug();

        if (cadastrar.length === 0) {
            return res.status(400).json({ Mensagem: 'Não foi possível cadastrar o usuário' })
        }

        return res.status(201).json(cadastrar[0])
    } catch (error) {
        console.log(error.message)
    }

}

const detalharUsuario = async (req, res) => {
    const { id } = req.params
    try {
        const usuario = await knex('usuario2')
            .where('id', id)
            .first()
            .debug();

        if (!usuario) {
            return res.status(404).json({ Mensagem: 'Usuário não encontrado.' })
        }
        return res.status(200).json(usuario)
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ Mensagem: 'Erro Interno do Servidor.' })
    }
}

const atualizar = async (req, res) => {
    const { nome, email, senha } = req.body
    const { id } = req.params
    try {
        //      verificar se usuário existe
        const usuarioExiste = await knex('usuario2')
            .where('id', id)
            .first()
            .debug()
        if (!usuarioExiste) {
            return res.status(404).json({ Mensagem: 'Usuário não encontrado.' })
        }
        //      atualizar usuário
        const usuario = await knex('usuario2')
            .update({ nome, email, senha })
            .where('id', id)
            .returning('*')


        return res.status(201).json(usuario)
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ Mensagem: 'Erro Interno do Servidor.' })
    }
}

const deletar = async (req, res) => {
    const { id } = req.params

    try {
        const usuarioExiste = await knex('usuario2')
            .where('id', id)
            .first()
            .debug()
        if (!usuarioExiste) {
            return res.status(404).json({ Mensagem: 'Usuário não encontrado.' })
        }

        const usuario = await knex('usuario2')
            .del()
            .where('id', id)
            .returning('*')
            .debug()
        return res.status(202).json(usuario)

    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ Mensagem: 'Erro Interno do Servidor.' })
    }
}

module.exports = {
    listarUsuarios,
    cadastrarUsuario,
    detalharUsuario,
    atualizar,
    deletar
}