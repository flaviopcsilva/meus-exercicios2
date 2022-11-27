const validarSenha = (req, res, next) => {
    const { senha } = req.query;
    if (!senha) {
        return res.send('A senha não foi Informada.')
    };

    if (senha !== "carros123") {
        return res.send('Senha Incorreta!')
    }
    next();

}

module.exports = {
    validarSenha
};