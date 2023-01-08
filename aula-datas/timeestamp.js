const finalDaCopa = new Date(2002, 5, 30, 8);
const timeEstamp = +finalDaCopa + (1000 * 60) * 60;

const finalMaisUmaHora = new Date(timeEstamp);

console.log(finalDaCopa, finalMaisUmaHora);