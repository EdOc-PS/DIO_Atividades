// Objetos 
//obj 1
let objeto: object = {
    nome: "Edu",
    idade: 21,
};
//obj 2
type objeto2 = {
    nome: string,
    idade: number,
}

let pessoa: objeto2 = {
    nome: "Edu",
    idade: 21,
}

//Arrey
//Simples
let arrey:number[] = [1,2,3,4,5,6,7,8,9];
let arrey2: Array<number> = [1,2,3,4,5,6,7];

//multiplos tipos
let info: (string|number)[] = [1,2,"Edu",3,4];

//Tuplas - os dados do array tem que seguir a ordem
let info2:[string, number, number] = ["Edu",3,4];

//datas
let datas:Date = new Date("2014-03-01");
console.log(datas.toISOString());