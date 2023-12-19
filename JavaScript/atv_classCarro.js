class Carro {
    marca;
    cor;
    gastoMedio;

    constructor(marca, cor, gastoMedio) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;
    }

    
    gastoViajem(km, valor) {
        console.log ('O gasto com a viajem é: R$' + km * valor * this.gastoMedio);
    }
}

const c1 = new Carro('Volvo', 'Azul', 1 / 20);

c1.gastoViajem(100, 5.25);
