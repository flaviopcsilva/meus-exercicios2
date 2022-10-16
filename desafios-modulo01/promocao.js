const produtos = [200, 150, 50, 100];

function solucao(precos) {

    let total = 0;
    let maisBarato = Math.min(...precos);
    //console.log(maisBarato);
    if (precos.length > 2) {
        for (let item of precos) {
            total += item;
        }
        maisBarato *= 0.5;
        total = total - maisBarato
    } else {
        for (let item of precos) {
            total += item;
        }
    }
    console.log(total);

}

solucao(produtos);