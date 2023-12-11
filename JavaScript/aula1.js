const precoCombustivel = 5;
const kmPorLitros = 15;
const distancia = 200;

const gastoTotal =  precoCombustivel*(distancia/kmPorLitros);
console.log("O gasto total foi: R$ "+gastoTotal.toFixed(2));