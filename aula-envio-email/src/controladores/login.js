const transportador = require('../email')
const fs = require('fs/promises')
const handlebars = require('handlebars')

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
    // const arquivo = await fs.readFile('./src/templates/login.html')


    const compilador = handlebars.compile(
        '<h1>Você fez login na {{api}} de Envio de emails {{nomeusuario}}?</h1>'
    )

    const htmlString = compilador(
        {
            nomeusuario: usuario.nome,
            api: 'API'

        }
    )

    try {

        //  FAZER ENVIO DE EMAIL

        transportador.sendMail({
            from: `${process.env.MAIL_NAME} <${process.env.MAIL_FROM}>`,
            to: `${usuario.nome} <${usuario.email}>`,
            subject: 'Tentiva de login',
            html: htmlString

        })

        return res.json({ Mensagem: 'Login Efetuado com Sucesso' })
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ Mensagem: 'Erro interno do servidor.' })
    }

}

const teste = async (req, res) => {
    const envio = process.env.PASS_SENDGRID
    return res.json(envio)
}

module.exports = {
    login,
    teste
}