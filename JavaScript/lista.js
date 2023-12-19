const lista = [1,2,3,4,5,6,7,8,9,10];
// forma reduzida do for

 lista.forEach((value, i, listRef ) => {
    console.log(value, i, listRef)
});

const pares = lista.filter((element) => {
    return element % 2 === 0;
});

console.log(pares);