

function sortear(){
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate= parseInt(document.getElementById("ate").value);
    let listaDeNumerosSorteados=[];

    for(let i = 0; i < quantidade;i++){
        let numeroSorteado=gerarNumeroAleatorio(de,ate);
        listaDeNumerosSorteados.push(numeroSorteado)        
    }
    console.log(listaDeNumerosSorteados)
}

function gerarNumeroAleatorio(limiteInicial,limiteFinal){
    return Math.floor(Math.random() * (limiteFinal - limiteInicial + 1)) + limiteInicial;

}


