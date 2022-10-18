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
let distancia=0;
let x1=1000;
let x2=-1000;
let y1=1000;
let y2=-1000;
for (let item of coordenadas){
//  console.log(item.x,item.y);
  if (item.x<x1){
    x1=item.x;
  }
  if(item.x>x2){
    x2=item.x;
  }
if (item.y<y1){
    y1=item.y;
  }
  if(item.y>y2){
    y2=item.y;
  }
  
}

    //const resultado=2 ≤ n ≤ 10^3 -1000 ≤ x, y ≤ 1000;
    distancia=Math.sqrt((Math.pow(x1-x2,2))+(Math.pow(y1+y2,2)));


   // console.log(coordenadas);
    console.log(distancia);
}
// dica, tem que achar o xa e xb, ya e yb e aplicar a fórmula d=raiz de (xa-xb)^+(ya-yb)^

solucao(texto);