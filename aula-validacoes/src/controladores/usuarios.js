const { usuarios } = require("../bancodedados")

const cadastrarUsuario = async (req, res) => {
    const { nome, email, senha } = req.body


    const novoUsuario = {
        nome,
        email,
        senha
    }
    usuarios.push(novoUsuario)
    return res.status(201).json(novoUsuario)

}

const listarUsuarios = async (req, res) => {

    return res.json(usuarios)
}

module.exports = {
    cadastrarUsuario,
    listarUsuarios
}