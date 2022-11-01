const usuarios = [
    {
        nome: 'Flávio',
        idade: 41
    },
    {
        nome: 'Suellen',
        idade: 36
    },
    {
        nome: 'Marina',
        idade: 18
    }
];

const fiscalizarFesta = (arrayObjetos) => {
    const verificarIdade = usuarios.every((idadeUsuario) => {
        return idadeUsuario.idade > 17;
    })
    console.log(verificarIdade);
    if (verificarIdade) {
        console.log('Festaliberada.');
    } else
        console.log('Possui menor de idade.');
}



fiscalizarFesta(usuarios);
