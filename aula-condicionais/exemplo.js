const ingresso = true;
const censura = 16;
const idade = 16;

if (ingresso === true) {
    if (idade >= censura) {
        console.log("Pode Entrar.")
    } else {
        console.log("Barrada(Cliente Menor de idade).")
    }
} else {
    console.log("Barrada(Cliente sem Ingresso).")
}