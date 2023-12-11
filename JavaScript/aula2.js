const precoGasolina = 5.63;
const precoEtanol = 3.64;
const tipoCombustivel = "Gasolina";
const kmPorLitros = 15;
const distancia = 200;

const gastoLitos = distancia / kmPorLitros;

if (tipoCombustivel === "Gasolina") {
   const gastoTotal = precoGasolina * gastoLitos;
    console.log("O gasto total foi: R$ " + gastoTotal.toFixed(2));
} else {
    const gastoTotal = precoEtanol * gastoLitos;
    console.log("O gasto total foi: R$ " + gastoTotal.toFixed(2));
}