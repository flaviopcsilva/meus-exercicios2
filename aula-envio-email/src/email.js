const nodemailer = require('nodemailer')



const transporte = nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    port: 465,
    auth: {
        user: "apikey",
        pass: process.env.PASS_SENDGRID
    }

})


module.exports = transporte