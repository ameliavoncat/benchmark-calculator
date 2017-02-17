function addActiveCalculatorListener(calculator) {
  document.getElementById(calculator.name).addEventListener('click', function(event){
    switchActiveCalculator(calculator)
  })
}
