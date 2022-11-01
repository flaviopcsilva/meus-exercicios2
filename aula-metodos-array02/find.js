const usuarios = [
    { nome: 'Flávio', idade: 41 }, { nome: 'João', idade: 21 }, { nome: 'Suellen', idade: 31 }, { nome: 'Marina', idade: 14 }
];

const resultado = usuarios.find((usuario) => {
    return usuario.nome === 'Marina';
})

console.log(resultado);