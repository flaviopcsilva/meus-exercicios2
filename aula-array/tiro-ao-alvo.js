const disparos = [0, 10, 50, 70, 80, 30, 81, 71];

let acertosValidos = 0;

for (let tiro of disparos) {
    if (tiro > 70) {
        acertosValidos++;
    }
}
if (acertosValidos >= 3) {
    console.log(acertosValidos);
} else
    console.log("ELIMINADO");