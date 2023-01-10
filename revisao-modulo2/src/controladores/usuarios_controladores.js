const { v4: uuid } = require('uuid');
let usuarios = require('../dados/usuarios');

const listarUsuarios = (req, res) => {
    return res.json(usuarios);
}

const cadastrarUsuario = (req, res) => {
    let id = uuid();
    let usuario = { id, ...req.body };

    usuarios.push(usuario);

    return res.json(usuario);

}

module.exports = {
    listarUsuarios,
    cadastrarUsuario
};