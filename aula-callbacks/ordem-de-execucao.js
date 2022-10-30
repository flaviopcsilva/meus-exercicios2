const saudacao = () => {
    console.log('Olá Flávio');
}


saudacao()

console.log('Chamada 1');
setTimeout(() => {
    console.log('SetTimeout executado...');
}, 2000)
console.log('Chamada 2');
console.log('Chamada 3');
for (let i = 0; i <= 5; i++) {
    let tempo = 3000;
    setTimeout(() => {
        console.log(`Teste ${i}`);
    }, tempo)
    tempo += 1000;


}