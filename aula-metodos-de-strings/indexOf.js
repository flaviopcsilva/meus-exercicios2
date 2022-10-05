const email = "flaviopc2@gmail.com";

const posicaoDoArroba = email.indexOf("@");
const pontoDepoisDoArroba = email.indexOf(".", posicaoDoArroba);

const temArroba = email.includes("@");

if (posicaoDoArroba < pontoDepoisDoArroba && temArroba) {
    console.log("Email Válido.");
} else {
    console.log("Email Inválido.");
}

