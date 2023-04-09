const intermediarioCadastrarUsuario = async (req, res, next) => {
    const { nome, email, senha } = req.body
    if (!nome) {
        return res.status(400).json({ Mensagem: 'O campo nome é obrigatório!' })
    }
    if (!email) {
        return res.status(400).json({ Mensagem: 'O campo email é obrigatório!' })
    }
    if (!senha) {
        return res.status(400).json({ Mensagem: 'O campo senha é obrigatório!' })
    }

    next()
}

module.exports = intermediarioCadastrarUsuario