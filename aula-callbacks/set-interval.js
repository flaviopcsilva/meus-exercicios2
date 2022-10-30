let numero = 1;
const contador = () => {
    if (numero >= 5) {
        clearInterval(idSetinterval);
    }
    console.log(numero);
    numero++;
}



const idSetinterval = setInterval(contador, 2000);