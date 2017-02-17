function addActiveCalculatorListener(calculator, startActive = false) {
  document.getElementById(calculator.name).addEventListener('click', function(event){
    switchActiveCalculator(calculator)
  })
  if(startActive) { switchActiveCalculator(calculator) }
}
