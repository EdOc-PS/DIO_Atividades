class Pessoa {
    nome;
    idade; 
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade
    }
    descrever(){
        console.log('Meu nome é ' + this.nome + ' e minha idade é ' +this.idade);
        }
};

const Eduardo = new Pessoa('Eduardo' , 18);
const Cleber = new Pessoa('Cleber', 25);

Eduardo.descrever();
Cleber.descrever();