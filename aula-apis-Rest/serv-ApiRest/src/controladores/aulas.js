let { identificadorAula, instrutores, aulas } = require('../bancodedados');

const cadastrarAula = (req, res) => {
    const { idInstrutor } = req.params;
    const { titulo, descricao } = req.body;

    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(idInstrutor);
    })

    if (!instrutor) {
        return res.status(404).json({ Mensagem: 'O instrutor não existe.' });
    }

    const aula = { id: identificadorAula++, instrutor_id: Number(idInstrutor), titulo, descricao: descricao };
    aulas.push(aula);

    return res.status(201).json(aula);

};

const listarAula = (req, res) => {
    return res.json(aulas);
};

const obterAula = (req, res) => {
    const { id } = req.params;

    const aula = aulas.find((aula) => {
        return aula.id === Number(id);
    });

    if (!aula) {
        return res.status(404).json({ Mensagem: 'Aula não Encontrada.' })
    }
    return res.json(aula);
};

const obterAulasIntrutor = (req, res) => {
    const { idInstrutor } = req.params;
    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(idInstrutor);
    })

    if (!instrutor) {
        return res.status(404).json({ Mensagem: 'O instrutor não existe.' });
    }

    const aulasEncontradas = aulas.filter((aula) => {
        return aula.instrutor_id === instrutor.id;
    });


    return res.status(200).json(aulasEncontradas);
};

module.exports = {
    cadastrarAula,
    listarAula,
    obterAula,
    obterAulasIntrutor
}