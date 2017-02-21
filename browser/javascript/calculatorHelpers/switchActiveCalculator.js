function switchActiveCalculator(calculator){
  if(!Array.from(document.getElementById(calculator.name).classList).includes('calculator-active')){
    Array.from(document.getElementsByClassName('calculator')).forEach(function(element){
      element.classList.remove('calculator-active')
    })
    document.getElementById(calculator.name).classList.add('calculator-active')
  }
}
