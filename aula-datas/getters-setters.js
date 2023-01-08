const hoje = new Date(1981, 0, 20);

if (hoje.getDay() === 0) {
    console.log("Domingo");
}
if (hoje.getDay() === 1) {
    console.log("Segunda");
}
if (hoje.getDay() === 2) {
    console.log("Terça");
}
if (hoje.getDay() === 3) {
    console.log("Quarta");
}
if (hoje.getDay() === 4) {
    console.log("Quinta");
}
if (hoje.getDay() === 5) {
    console.log("Sexta");
}
if (hoje.getDay() === 6) {
    console.log("Sábado");
}

//muda a data do dia
hoje.setDate(21);
console.log(hoje);

hoje.setDate(hoje.getDate() - 30) //volta 30 dias no calendário
console.log(hoje);