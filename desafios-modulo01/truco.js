


function jogada(carta) {
    let manilha = "";
    if (carta === "Q") {
        manilha = "J";
    } else if (carta === "J") {
        manilha = "K";
    } else if (carta === "K") {
        manilha = "A";
    } else if (carta === "A") {
        manilha = "2";
    } else if (carta === "2") {
        manilha = "3";
    } else if (carta === "3") {
        manilha = "Q";
    }

    console.log(manilha);
}

const cartas=["2","3","Q","K","A","J"];
function jogada2(carta){
  let manilha="";
  for(let item of carta){
    
  }
}

jogada("Q");
