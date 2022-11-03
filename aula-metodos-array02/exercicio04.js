const professores = [
    { nome: 'Guido', stack: 'Backend' },
    { nome: 'Vidal', stack: 'Backend' },
    { nome: 'Dani', stack: 'Frontend' },
    { nome: 'Diego', stack: 'Frontend' },
    { nome: 'Léo', stack: 'Backend' },
    { nome: 'Ruli', stack: 'Frontend' }
];

const professoresBack = professores.filter((back) => {
    return back.stack === 'Backend';
});

const professoresFront = professores.filter((front) => {
    return front.stack === 'Frontend';
});
console.log('Professores de Backend:');

for (let i = 0; i < professoresBack.length; i++) {
    console.log(`${professoresBack[i].nome}`);
};
console.log('----------------------------------------');
console.log('Professores de Frontend:');
for (let i = 0; i < professoresFront.length; i++) {
    console.log(`${professoresFront[i].nome}`);
}

