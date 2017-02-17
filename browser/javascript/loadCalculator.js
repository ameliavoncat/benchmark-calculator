window.onload = function(){
  var numberButtons = Array.from(document.getElementsByClassName('calculator-button-number'))
  var operationButtons = Array.from(document.getElementsByClassName('calculator-button-operation'))
  var equalsButton = Array.from(document.getElementsByClassName('calculator-button-equals'))[0]
  var allClearButton = Array.from(document.getElementsByClassName('calculator-button-ac'))[0]
  var negativeButton = Array.from(document.getElementsByClassName('calculator-button-neg'))[0]
  var decimalButton = Array.from(document.getElementsByClassName('calculator-button-decimal'))[0]
  var newCalculator = new Calculator(0, 0, 0, null, false)

  numberButtons.forEach(function(button){ addNumberListener(button, newCalculator) })
  operationButtons.forEach(function(button){ addOperationListener(button, newCalculator) })
  addEqualsListener(equalsButton, newCalculator)
  addAllClearListener(allClearButton, newCalculator)
  addNegativeListener(negativeButton, newCalculator)
  addDecimalListener(decimalButton, newCalculator)
  addKeyDownListener(newCalculator)
}
