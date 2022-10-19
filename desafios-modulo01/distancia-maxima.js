const texto = "3\n0 0\n0 3\n4 0";

function solucao(input) {

  const linhas = input.trim().split("\n");
  const n = parseFloat(linhas[0]);

  const coordenadas = [];

  for (let i = 1; i < linhas.length; i++) {
    const coord = linhas[i].split(" ");
    coordenadas.push({
      x: parseFloat(coord[0]),
      y: parseFloat(coord[1])
    })
  }
  let distancia = 0;

  for (let i = 0; i < coordenadas.length; i++) {
    for (let j = 1; j < coordenadas.length; j++) {
      let x =;
      let y = 0;

    }
  }

  // let x1 = 1000;
  // let x2 = 0;
  // let y1 = 1000;
  // let y2 = -1000;
  // for (let item of coordenadas) {
  //   //console.log(item.x,item.y);
  //   if (item.x < x1) {
  //     x1 = item.x;
  //   }
  //   if (item.x > x2) {
  //     x2 = item.x;
  //   }
  //   if (item.y < y1) {
  //     y1 = item.y;
  //   }
  //   if (item.y > y2) {
  //     y2 = item.y;
  //   }

  // }
  // let x3 = x1 + x2;
  // let y3 = y1 + y2;


  // // console.log(x3, y3);
  // // console.log(x1, x2, y1, y2)

  // // distancia = Math.hypot(x3, y3);
  // distancia = parseFloat(Math.sqrt((Math.pow(x1 + x2, 2)) + (Math.pow(y1 + y2, 2))));


  console.log(distancia);
}

// fazer um teste com todas as coordenadas
solucao(texto);
solucao("5\n3.56 17\n-5.1 36.3\n0.0002 -2\n5 5\n-9.01 -17.7")

