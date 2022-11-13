const pessoas = ['João', 'flávio', 'ana', 'flávia', 'carlos', 'bira', 'beatriz'];

pessoas.sort((a, b) => {
    return a.localeCompare(b);
});

console.log('Ordem Crescente:');
console.log(pessoas.join(', '));

pessoas.sort((a, b) => {
    return b.localeCompare(a);
});
console.log('Ordem Decrescente:');
console.log(pessoas.join(', '));