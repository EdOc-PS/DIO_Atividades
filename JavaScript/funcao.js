function EscreverNome(nome){
    return "Meu nome é "+ nome;
}

function verificarIdade(idade){
    if(idade >= 18){
        console.log(EscreverNome("Eduardo")+" e eu sou maior de idade");
    }else{
        console.log(EscreverNome("Eduardo")+" e eu sou menor de idade");
    }
}

verificarIdade(18);