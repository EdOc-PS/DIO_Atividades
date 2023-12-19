class Pessoa {
    nome;
    idade; 

    descrever(){
        console.log('Meu nome é ' + this.nome + ' e minha idade é ' +this.idade);
        }
};

const Eduardo = new Pessoa();
Eduardo.nome = 'Eduardo';
Eduardo.idade = 18;

const Cleber = new Pessoa();
Cleber.nome = 'Cleber';
Cleber.idade = 15;

Eduardo.descrever();
Cleber.descrever();