const nome = "flavio peres cardoso silva jr";

const arrayNome = nome.split(" ");

//console.log(arrayNome);
let nomeFormatado = "";

for (let item of arrayNome) {
    //transformar a inicial de cada item em maiuscula
    let primeiraletra = item.slice(0, 1);
    let restanteDoNome = item.slice(1);
    nomeFormatado += primeiraletra.toUpperCase() + restanteDoNome + " "

    // ou
    //let primeiraletraMaiuscula = primeiraletra.toUpperCase();

    // console.log(primeiraletraMaiuscula);
    //item = item.replace(primeiraletra, primeiraletraMaiuscula);
    //console.log(item);
    //nomeFormatado += item.replace(primeiraletra, primeiraletraMaiuscula) + " ";


}

console.log(nomeFormatado.trim());
