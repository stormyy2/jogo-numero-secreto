const menorValor = 1
const maiorValor = 100
const numeroSecreto = gerarNumero()

function gerarNumero() {
  return parseInt(Math.random() * maiorValor + 1)
}
console.log("O número é:", numeroSecreto)

const elementoMaiorValor = document.getElementById("maior-valor")
elementoMaiorValor.innerHTML = maiorValor
const elementoMenorValor = document.getElementById("menor-valor")
elementoMenorValor.innerHTML = menorValor
