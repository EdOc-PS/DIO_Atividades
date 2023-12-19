function tabuada() {
const numero = 1

for (let i = 1; i <= 10; i++) {
    console.log(numero * i);
}
}

 function nPares(){
    const numeros = [1,2,3,4,5,6,7,8,9,10]
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            console.log(numeros[i]);
        }
    }
 }


nPares();