const notas = [];
notas.push(2);
notas.push(7);
notas.push(5);
notas.push(8);
notas.push(4);

let somaNotas = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i]
    somaNotas = nota + somaNotas;
}

const media = somaNotas / notas.length;
console.log(media);