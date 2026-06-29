let botaoEnviar = document.getElementById("botao")
let listaDeChutes = document.getElementById("lista")
let entrada = document.getElementById("entrada")
let feedback = document.getElementById("feedback")
let tentativas = 0
let numeroSecreto
let acerto = document.getElementById("novoJogo")
//fim da criacao das variaveis


//criacao das funcoes
function adicionarPalpite(){
    if (entrada.value === "") {
    return
}
    let valorEscolhido = entrada.value // pega a entrada do usuario 
    let chute = document.createElement("li") // cria o elemento li
    chute.id = "chute"
    listaDeChutes.appendChild(chute) // coloca dentro da ul
    chute.textContent = valorEscolhido // coloca o valor dentro da li
    
    
}

function novoJogo(){
    entrada.disabled = false
    botaoEnviar.disabled = false
    numeroSecreto = Math.floor(Math.random()* 100) + 1 // criando um novo numero
    listaDeChutes.innerHTML = "" // limpando a lista de tentativas
    entrada.value = ""
    tentativas = 0
}

//criando toda a verificacaoDePalpite
function verificacaoDePalpite(){
    if(Number(entrada.value) > numeroSecreto){
        feedback.innerHTML = ""
        let mensagemDeDica = document.createElement("h4")
        mensagemDeDica.className = "dica"
        mensagemDeDica.textContent = "Número muito alto"
        feedback.appendChild(mensagemDeDica)
    }
    else if (Number(entrada.value) < numeroSecreto) {
        feedback.innerHTML = ""
        let mensagemDeDica = document.createElement("h4")
        mensagemDeDica.className = "dica"
        mensagemDeDica.textContent = "Número muito baixo"
        feedback.appendChild(mensagemDeDica)
    }
    else if (Number(entrada.value) === numeroSecreto) {    
        feedback.innerHTML = ""
        let mensagemDeDica = document.createElement("h2")
        mensagemDeDica.id = "acerto"
        mensagemDeDica.textContent = "Voce acertou!!!"
        feedback.appendChild(mensagemDeDica)
        //
        let numeroDeTentativas = document.createElement("h4")
        numeroDeTentativas.id = "tentativas"
        numeroDeTentativas.textContent = "Número de tentativas: "+ tentativas
        feedback.appendChild(numeroDeTentativas)
        //
        entrada.disabled = true
        botaoEnviar.disabled = true
        //
        let botaoNovoJogo = document.createElement("button")
        botaoNovoJogo.id = "botaoNovoJogo"
        botaoNovoJogo.textContent = "Jogar Novamente"
        feedback.appendChild(botaoNovoJogo)
        //
        botaoNovoJogo.addEventListener("click", function(){
            novoJogo()
            botaoNovoJogo.remove()
            feedback.innerHTML = ""
            entrada.value = ""

        })
    }
}
function verificacaoDeErro(){
    let mensagemDeErro = document.createElement("h4")
    mensagemDeErro.id = "erro"
    entrada.value = ""
    feedback.innerHTML = ""
    mensagemDeErro.textContent = "Digite um número inteiro de 0 a 100"
    feedback.appendChild(mensagemDeErro)
}

//fim da criacao de todas as funcoes


novoJogo()
//criando botaoEnviar
botaoEnviar.addEventListener("click", function(){
    if (entrada.value === "") {
    }
    else if (entrada.value % 2 !== 0 && Number(entrada.value) % 2 !== 1){
        verificacaoDeErro()
    }
    else if (Number(entrada.value) < 0 || Number(entrada.value) > 100){
        verificacaoDeErro()
    }
    else{
        tentativas++
        adicionarPalpite()
        verificacaoDePalpite()
        entrada.value = ""
    }
})
