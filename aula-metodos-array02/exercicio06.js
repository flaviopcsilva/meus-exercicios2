const usuarios = [
    { id: 11, nome: 'joão', idade: 23 },
    { id: 2, nome: 'maria', idade: 40 },
    { id: 4, nome: 'carlos', idade: 18 },
    { id: 1, nome: 'bira', idade: 43 },
    { id: 123, nome: 'flavio', idade: 41 }
];
console.log('Ordem Crescente');
usuarios.sort((a, b) => {

    return a.id - b.id;
})
console.log(usuarios);

console.log('Ordem Descrescente:');
usuarios.sort((a, b) => {

    return b.id - a.id;
})

console.log(usuarios);