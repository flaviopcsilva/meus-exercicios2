const transportador = require('../email')

const usuario = {
    nome: 'Cardoso Cubos',
    email: 'flaviopc2@gmail.com',
    senha: '252525'
}

const login = async (req, res) => {
    const { email, senha } = req.body
    if (usuario.email !== email) {
        return res.status(400).json({ Mensagem: 'Email ou senha inválidos.' })
    }

    if (usuario.senha !== senha) {
        return res.status(400).json({ Mensagem: 'Email ou senha inválidos.' })
    }
    try {
        //  FAZER ENVIO DE EMAIL

        transportador.sendMail({
            from: `${process.env.MAIL_NAME} <${process.env.MAIL_FROM}>`,
            to: `${usuario.nome} <${usuario.email}>`,
            subject: 'Verificação de Integração',
            text: 'Integração verificada com sucesso'

        })

        return res.json({ Mensagem: 'Login Efetuado com Sucesso' })
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ Mensagem: 'Erro interno do servidor.' })
    }

}

module.exports = {
    login
}