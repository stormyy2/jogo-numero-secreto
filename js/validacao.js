function verificaChute(chute) {
  const numero = +chute

  if (chuteInvalido(numero)) {
    if (chute === "game over") {
      document.body.innerHTML = `
      <h1>O jogo acabou.</h1>
      <button id="jogar-novamente" class="btn-jogar">Jogar Novamente!</button>
      `
    } else {
      elementoChute.innerHTML += `<div>Valor inválido!</div>`
      return
    }
  }

  if (numeroMaiorOuMenor(numero)) {
    elementoChute.innerHTML += `<div>Valor inválido! O numero precisa estar entre: ${menorValor} e ${maiorValor}!</div>`
    return
  }
  if (numero === numeroSecreto) {
    document.body.innerHTML = `
    <h1>Parabéns! Você acertou!</h1>
    <h3>O numero secreto era: ${numeroSecreto}</h3>

    <button id="jogar-novamente" class="btn-jogar">Jogar Novamente!</button>
    `
  } else if (numero > numeroSecreto) {
    elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>`
  } else {
    elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`
  }
}

function chuteInvalido(numero) {
  return Number.isNaN(numero)
}

function numeroMaiorOuMenor(numero) {
  return numero > maiorValor || numero < menorValor
}

document.body.addEventListener("click", (evento) => {
  if (evento.target.id == "jogar-novamente") {
    window.location.reload()
  }
})
