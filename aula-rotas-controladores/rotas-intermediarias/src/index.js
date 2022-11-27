const express = require('express');
const { filtrarProfessores, encontrarUmProfessor } = require('./controladores/professores');

const app = express();


const primeiroIntermediario = (req, res, next) => {
    console.log('Passei no primeiro intermediário.');

    next()
}

const segundoIntermediario = (req, res, next) => {
    console.log('Passei no Segundo intermediário.');

    next()
}

const intermediarioDaRota = (req, res, next) => {
    console.log('Passei no intermediario da rota.');

    next()
}

//intermediario independente
app.use(primeiroIntermediario);
// app.use(segundoIntermediario);



//Rota localhost:3000/professores
app.get('/professores', intermediarioDaRota, filtrarProfessores);

//Rota localhost:3000/professores/:id
app.get('/professores/:id', encontrarUmProfessor);


app.listen(3000);