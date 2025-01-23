function sortear(){
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate= parseInt(document.getElementById("ate").value);
    let listaDeNumerosSorteados=[];
    let numeroSorteado; 

    for(let i=0;i< quantidade;i++){
        numeroSorteado = gerarNumeroAleatorio(de,ate);
        while(listaDeNumerosSorteados.includes(numeroSorteado)){
            numeroSorteado =gerarNumeroAleatorio(de,ate);
        }
        listaDeNumerosSorteados.push(numeroSorteado);
        console.log(listaDeNumerosSorteados);
    }
    document.getElementById("resultado").innerHTML =`<label class="texto__paragrafo">Números sorteados:  ${listaDeNumerosSorteados}</label>`;
    alterarStatusBotaoReiniciar();    
}

function gerarNumeroAleatorio(limiteInicial,limiteFinal,){
    let resultado= Math.floor(Math.random() * (limiteFinal - limiteInicial + 1)) + limiteInicial;
    return resultado;
}

function limparTela() {
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
}

function reiniciar(){
    limparTela();
    alterarStatusBotaoReiniciar();
    document.getElementById("resultado").innerHTML='<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
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

// function validarSorteio(quantidade,de,ate){
//     let rangeDeNumeros=de-ate;
//     rangeDeNumeros=Math.abs(rangeDeNumeros);
//     console.log(rangeDeNumeros);
//     if(quantidade>rangeDeNumeros){
//         alert("Voce digitou uma quantidade de numeros excedentes a lista de numeros disponiveis");
//         limparTela();
//         return;
        
//     }
//     else{

//     }
// }    