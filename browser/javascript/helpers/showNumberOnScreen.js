function showNumberOnScreen(value, calculator){
  var screen = document.querySelector(`div#${calculator.name} div.calculator-screen-number`)
  screen.innerHTML = calculator[value]
}
