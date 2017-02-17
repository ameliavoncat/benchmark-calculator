function addActiveCalculatorListener(calculatorId) {
  document.getElementById(calculatorId).addEventListener('click', function(event){
    switchActiveCalculator(calculatorId)
  })
}
