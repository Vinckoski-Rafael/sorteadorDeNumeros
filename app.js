function sortear(){
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate= parseInt(document.getElementById("ate").value);
    let listaDeNumerosSorteados=[];

    while(listaDeNumerosSorteados.length < quantidade){
        let numeroSorteado = gerarNumeroAleatorio(de,ate,listaDeNumerosSorteados); 
        listaDeNumerosSorteados.push(numeroSorteado);      
        console.log( listaDeNumerosSorteados);
    }
    alterarStatusBotaoReiniciar();
}

function gerarNumeroAleatorio(limiteInicial,limiteFinal,listaDeNumeros){
    let resultado= Math.floor(Math.random() * (limiteFinal - limiteInicial + 1)) + limiteInicial;
    while(listaDeNumeros.includes(resultado)){
         resultado= Math.floor(Math.random() * (limiteFinal - limiteInicial + 1)) + limiteInicial;
    }
    return resultado;
}

console.log(listaDeNumerosSorteados);

function limparTela() {
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
}
function reiniciar(){
    limparTela();
    alterarStatusBotaoReiniciar();
}

function alterarStatusBotaoReiniciar(){
    let botaoReiniciar=document.getElementById("btn-reiniciar");
    if(botaoReiniciar.classList.contains("container__botao-desabilitado")){
        botaoReiniciar.classList.remove("container__botao-desabilitado");
        botaoReiniciar.classList.add("container__botao");
    }
    else{
        botaoReiniciar.classList.remove("container__botao");
        botaoReiniciar.classList.add("container__botao-desabilitado");
    }
}
