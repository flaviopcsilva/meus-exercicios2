function repleceAll(original, text, newText) {
    while (original !== original.replace(text, newText)) {
        original = original.replace(text, newText);
    }
    return original;
}

let numero = "1,350,000";


// numero = numero.replace(",", ".");
// numero = numero.replace(",", ".");

console.log(repleceAll(numero, ",", "."));