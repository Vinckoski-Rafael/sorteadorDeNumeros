function sortear(){
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate= parseInt(document.getElementById("ate").value);
    let listaDeNumerosSorteados=[];
    let numeroSorteado; 
    if(validarSorteio(quantidade,de,ate)){
        for(let i=0;i< quantidade;i++){
            numeroSorteado = gerarNumeroAleatorio(de,ate);
            while(listaDeNumerosSorteados.includes(numeroSorteado)){
                numeroSorteado =gerarNumeroAleatorio(de,ate);
            }
            listaDeNumerosSorteados.push(numeroSorteado);            
            console.log(listaDeNumerosSorteados);
        }
        listaDeNumerosSorteados.sort((a, b) => a - b);
        document.getElementById("resultado").innerHTML =`<label class="texto__paragrafo">Números sorteados:  ${listaDeNumerosSorteados}</label>`;
        alterarStatusBotaoReiniciar();    
    }
    else{
        return;
    }
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
  
function validarSorteio(quantidade,de,ate){
    if (!isNaN(quantidade) && !isNaN(de) && !isNaN(ate)) {
        if (de <= ate){
            if (quantidade < (ate - de + 1)) {
                if (quantidade >0){
                    return true;
                }
                else{
                    alert('Campo "Quantidade" deve ser maior que zero. Verifique!');
                }
            }
            else{
                alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
                return false;
            }            
        }
        else{
            alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
            return false;
        }
    }
    else{
        alert('Por favor, insira apenas números nos campos.');
        return false;
    }
}    