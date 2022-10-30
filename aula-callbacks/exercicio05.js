const microondas = (tempo) => {
    let segundos = tempo / 1000;
    console.log('Iniciou...');

    const contador = () => {
        console.log(segundos);
        segundos--;
        if (segundos <= -1) {
            console.log('Finalizou...');
            clearInterval(idSetInterval);
        }
    }

    const idSetInterval = setInterval(contador, 1000);
}

microondas(8000);