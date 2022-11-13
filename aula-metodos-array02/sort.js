const numeros = [3, 20, 1, 13, 50, 1, 4, 2];

//Ordenação crescente:
numeros.sort((a, b) => {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
});
console.log(numeros);

const numeros2 = [3, 20, 1, 13, 50, 1, 4, 2];

//Ordenação decrescente:
numeros2.sort((a, b) => {
    if (a > b) {
        return -1;
    }
    if (a < b) {
        return 1;
    }
    return 0;
});
console.log(numeros2);