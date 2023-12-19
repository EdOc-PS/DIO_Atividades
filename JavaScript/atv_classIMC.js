class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    calcularIMC() {
        return (this.peso / Math.pow(this.altura, 2)).toFixed(2);
    }
    classificarIMC() {
        if (this.calcularIMC() < 18.5) {
            return 'Abaixo do peso';
        } else if (this.calcularIMC() >= 18.5 && this.calcularIMC() < 25) {
            return 'Peso normal';
        } else if (this.calcularIMC() >= 25 && this.calcularIMC() < 30) {
            return 'Acima do peso';
        } else if (this.calcularIMC() >= 30 && this.calcularIMC() < 40) {
            return 'Obesidade I';
        } else{
            return 'Obesidade II';
        } 
    }
}
    const p1 = new Pessoa('Jose', 80, 1.80);
    console.log('IMC: ' + p1.calcularIMC() +'\nClassificação: '+p1.classificarIMC());