const texto = "3\n0 0\n0 3\n4 0";

function solucao(input) {

    const linhas = input.trim().split("\n");
    const n = parseInt(linhas[0], 10);

    const coordenadas = [];

    for (let i = 1; i < linhas.length; i++) {
        const coord = linhas[i].split(" ");
        coordenadas.push({
            x: parseInt(coord[0], 10),
            y: parseInt(coord[1], 10)
        })
    }

    //const resultado=2 ≤ n ≤ 10^3 -1000 ≤ x, y ≤ 1000;


    console.log(coordenadas);
}
// dica, tem que achar o xa e xb, ya e yb e aplicar a fórmula d=raiz de (xa-xb)^+(ya-yb)^

solucao(texto);