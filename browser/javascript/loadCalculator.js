window.onload = function(){
  var numberButtons1 = Array.from(document.querySelectorAll('div#calculator-1 button.calculator-button-number'))
  var operationButtons1 = Array.from(document.querySelectorAll('div#calculator-1 button.calculator-button-operation'))
  var equalsButton1 = Array.from(document.querySelectorAll('div#calculator-1 button.calculator-button-equals'))[0]
  var allClearButton1 = Array.from(document.querySelectorAll('div#calculator-1 button.calculator-button-ac'))[0]
  var negativeButton1 = Array.from(document.querySelectorAll('div#calculator-1 button.calculator-button-neg'))[0]
  var decimalButton1 = Array.from(document.querySelectorAll('div#calculator-1 button.calculator-button-decimal'))[0]

  var calculator1 = new Calculator(0, 0, 0, null, false, 'calculator-1')
  numberButtons1.forEach(function(button){ addNumberListener(button, calculator1) })
  operationButtons1.forEach(function(button){ addOperationListener(button, calculator1) })
  addEqualsListener(equalsButton1, calculator1)
  addAllClearListener(allClearButton1, calculator1)
  addNegativeListener(negativeButton1, calculator1)
  addDecimalListener(decimalButton1, calculator1)
  addKeyDownListener(calculator1)
  addActiveCalculatorListener(calculator1, true)
}
