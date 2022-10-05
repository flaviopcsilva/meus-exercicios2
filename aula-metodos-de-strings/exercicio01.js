const cidade = "Rio de Janeiro-RJ";

//const indexHifen = cidade.indexOf("-");

const penultimoIndex = cidade.length - 2;

let estado = cidade.slice(penultimoIndex);

console.log(estado);