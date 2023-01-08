const { format, startOfHour, endOfHour, parse, isAfter, isBefore, isSameDay, add, setDay, setDate, addBusinessDays, set, differenceInDays } = require('date-fns');

//FORMAT
// const data = new Date(1981, 0, 20);

// console.log(format(data, 'dd/MMM/yyyy'));
// //ou
// console.log(format(data, "dd 'de' MMM 'de' yyyy  hh:mm'hs'"));


//PARSE
// const dataNasc = '20/01/1981';

// const resultado = parse(dataNasc, "dd/MM/yyyy", new Date());

// console.log(resultado);

//ADD
const data = new Date(2018, 2, 13, 12);

console.log(data);

console.log(add(data, {
    seconds: 15,
    days: 2
}));

console.log(data);

const novaData = add(data, {
    days: 45,
    years: 2
});
console.log(novaData);

//add Bussines Days - dias uteis
const resultado = addBusinessDays(new Date(2023, 0, 9), /*dias para chegar*/7);

console.log(resultado);

//diference
const chegadaDoProduto = differenceInDays(resultado, new Date(2023, 0, 9));

console.log(`Previsão de entrega: ${chegadaDoProduto} dias.`);

//set
const metSet = set(new Date(2023, 0, 2), {
    date: 10
});
console.log(metSet);

const metSetDay = setDay(new Date(2023, 0, 8), 20);
console.log(metSetDay);

const metSetData = setDate(new Date(2023, 0, 8), 20);
console.log(metSetData);

//metodos isSame - comparar duas datas
const metIsSameDay = isSameDay(new Date(2023, 0, 8, 12), new Date(2023, 0, 8, 15));
console.log(metIsSameDay);

//metodos isAfter-compara se a data é depois  isBefore-compara se a data foi antes
const data1 = new Date(2023, 0, 5, 12, 45);
const data2 = new Date(2023, 0, 8, 12, 35);
const metIsAfter = isAfter(data2, data1);
console.log(metIsAfter);

const metIsBefore = isBefore(data2, data1);
console.log(metIsBefore);

// Metodos startOf- zera depois do incremento
//metodos endOf-todos os que vem depois fica no limite
const metStartOf = startOfHour(data1);
const metEndOf = endOfHour(data1);
console.log(metStartOf);
console.log(metEndOf);