function verificaChuteValido (chute){
    const numero =  +chute

    if (chuteForInvalido(numero)){
       elementoChute.innerHTML +='<div>Valor inválido </div>'
       return
    }
    if (NumeroMaiorOuMenor(numero)){
        elementoChute.innerHTML += `<div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`
        return
    }
    if (numero === numeroSecreto)
    {
        document.body.innerHTML =`
        <h2> Você acertou!</h2>
        <h3> O número secreto era ${numeroSecreto} </h3>
        <button id="jogar-novamente" class= "btn-jogar-novamente"> Jogar Novamente </button>
        `
        document.body.classList.toggle("acerto")
        return
    } else if (numero > numeroSecreto){
        elementoChute.innerHTML += `<div> O número secreto é menor! <i class="fa-solid fa-angle-down"></i></div>
`
    } else {
        elementoChute.innerHTML += ` <div> O número secreto é maior! <i class="fa-solid fa-angle-up"></i></div>`
    }
    
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function NumeroMaiorOuMenor(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e =>{
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})