const nodemailer = require('nodemailer')

const transporte = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
        user: process.env.MAIL_USER,
        senha: process.env.MAIL_PASS
    }
})

module.exports = transporte