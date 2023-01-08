const { json } = require('express');
const express = require('express');
const fs = require('fs/promises');

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    const texto = 'Olá'
    await fs.writeFile('./src/texto.txt', texto);

    res.json('OK.')
});

app.post('/', async (req, res) => {
    const { nome, idade } = req.body;

    const teste = await fs.readFile('./src/usuarios.json');

    const pessoas = JSON.parse(teste);

    pessoas.push({
        nome,
        idade
    });

    const addPessoas = JSON.stringify(pessoas);
    await fs.writeFile('./src/usuarios.json', addPessoas);

    return res.json({ Mensagem: 'Usuário adicionado com sucesso.' });

})

app.listen(3000);