
const n1 = 6;
const n2 = 9;
const n3 = 7;

const media = (n1 + n2 + n3)/3; 

if(media < 5){
    console.log("Reprovado")
}else if(media === 5 || media < 7){
    console.log("Recuperação")
}else{
    console.log("Aprovado")
}