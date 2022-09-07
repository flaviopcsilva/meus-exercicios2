const temIngresso = true;
const censura = 16;
const idade = 15;
const estaComOsPais = true;

if (temIngresso) {
    if (idade >= censura || estaComOsPais) {
        console.log("Pode Entrar!");
    } else
        console.log("Barrado.");
} else
    console.log("Barrado.");
console.log("Fim do Código.");