//tipar objetos
type robo = { 
    nome: string,
    metal: string,
    idade: number,
}
//Tipar classes
interface robo2{
    nome: string,
    metal: string,
    idade: number,
}

const bot: robo = {
    nome: "Robo",
    metal: "Aço",
    idade: 2,
}

class Robot implements robo2{
    constructor(nome:string, metal:string, idade:number){
        this.nome = nome;
        this.metal = metal;
        this.idade = idade;
    }
    nome: string
    metal: string
    idade: number

}