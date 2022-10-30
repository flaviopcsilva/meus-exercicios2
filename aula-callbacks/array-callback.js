const buscarFruta = (arrayDeFrutas, callback) => {

    for (let fruta of arrayDeFrutas) {
        if (callback(fruta)) {
            console.log('Fruta encontrada');

            return;
        }
    }

    console.log('Fruta não encontrada.')
}

const frutas = ['uva', 'manga', 'abacaxi', 'banana'];


buscarFruta(frutas, (item) => {

    return item === 'banana';

})