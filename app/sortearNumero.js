let menorValor = 1
let maiorValor = 100
const numeroSecreto = gerarNumeroAleatorio(menorValor,maiorValor)


function gerarNumeroAleatorio (min,  max) {
    return parseInt(Math.random() * (max - min) + min + 1);
}
const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor
const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor

console.log('Número secreto:',numeroSecreto)