const numeros = [3, 20, 1, 13, 50, 1, 4, 2];

//Ordenação crescente:
numeros.sort((a, b) => {
    return a - b;
});
console.log(numeros);


numeros.sort((a, b) => {
    return b - a;
});
console.log(numeros);