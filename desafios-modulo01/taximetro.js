const tempoDeViagem = 25;
const distancia = 11.5;


function solucao(min, km) {

    let totalAPagar = 0;
    if (min <= 20 && km <= 10) {
        totalAPagar = (min * 50) + (km * 70);
    } else {

        let tempoAdicional = 0;
        distanciaAdicional = 0;
        if (min > 20 && km <= 10) {
            tempoAdicional = min - 20;
            totalAPagar = Math.floor(((20 * 50) + ((tempoAdicional * 30) + (km * 70))));
        }
        if (km > 10 && min <= 20) {
            distanciaAdicional = km - 10;
            totalAPagar = Math.floor(((10 * 70)) + ((min * 50) + (distanciaAdicional * 50)));
        }
        if (km > 10 && min > 20) {
            tempoAdicional = min - 20;
            distanciaAdicional = km - 10;
            totalAPagar = Math.floor(((20 * 50) + (10 * 70)) + ((tempoAdicional * 30) + (distanciaAdicional * 50)));
        }


        //totalAPagar = Math.floor(((20 * 50) + (10 * 70)) + ((tempoAdicional * 30) + (distanciaAdicional * 50)));

    }
    console.log(totalAPagar);

}

solucao(tempoDeViagem, distancia);