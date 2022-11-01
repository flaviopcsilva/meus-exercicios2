const nomes = ['fotos.jpg', 'livo.pdf', 'planilha.doc', 'carro.bat'];

// const verificarVirus = (nomeDoArquivo) => {
//     const arrayDeextensao = [];
//     for (let item of nomeDoArquivo) {
//         const extensao = item.slice(-4);
//         arrayDeextensao.push(extensao);
//     }
//     const resultado = arrayDeextensao.some((virus) => {
//         return virus === '.bat';
//     })
//     console.log(arrayDeextensao);
//     if (resultado) {
//         console.log('Vírus detectado.');
//     } else {
//         console.log('Neunhum vírus encontrado.');
//     }


// }

//Melhor ser feito assim:

const antiVirus = (arrayArquivos) => {
    const resultado = arrayArquivos.some((arquivo) => {
        const existeArquivo = arquivo.indexOf('.bat');

        return existeArquivo != -1;
    });

    if (resultado) {
        console.log('Vírus Detectado.');
    } else {
        console.log('Nunhum vírus encontrado.');
    }
}



antiVirus(nomes);