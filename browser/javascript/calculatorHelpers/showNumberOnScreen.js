function showNumberOnScreen(value, calculator){
  var screen = document.querySelector(`div#${calculator.name} div.calculator-screen-number`)
  var history = document.querySelector(`div#${calculator.name} div.calculator-screen-history`)

  screen.innerHTML = calculator[value]
  history.innerHTML = calculator.history.map(function(number){
    return `${number} <br>`
  }).join('')
  history.scrollTop = history.scrollHeight
}
