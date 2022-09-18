const precos = [100, 500, 50, 100, 200, 30];

const produto = precos.length;
let totalApagar = 0;
let valorMaior = 0;
let valorMenor = 0;

if (produto < 5) {
    for (let valor of precos) {
        totalApagar += valor;
    }

} else {
    for (let valor of precos) {
        totalApagar += valor;

    }
    for (let maior of precos) {
        if (valorMaior < maior) {
            valorMaior = maior;
        } else {
            valorMaior = maior;
        }

    }
    totalApagar -= valorMaior;


}


console.log(totalApagar);