function generateCalculator(name, windowName){
  function attachCalculatorListeners(calculatorName, visitorId, calculatorHistory = []){
    var calculator = new Calculator(0, 0, 0, null, false, visitorId, calculatorName, calculatorHistory)

    numberButtons.forEach(function(button){ addNumberListener(button, calculator) })
    operationButtons.forEach(function(button){ addOperationListener(button, calculator) })
    addEqualsListener(equalsButton, calculator)
    addAllClearListener(allClearButton, calculator)
    addNegativeListener(negativeButton, calculator)
    addDecimalListener(decimalButton, calculator)
    addKeyDownListener(calculator)
    addActiveCalculatorListener(calculator, true)
    showNumberOnScreen('previous', calculator)
  }

  var numberButtons = Array.from(document.querySelectorAll(`div#${name} button.calculator-button-number`))
  var operationButtons = Array.from(document.querySelectorAll(`div#${name} button.calculator-button-operation`))
  var equalsButton = Array.from(document.querySelectorAll(`div#${name} button.calculator-button-equals`))[0]
  var allClearButton = Array.from(document.querySelectorAll(`div#${name} button.calculator-button-ac`))[0]
  var negativeButton = Array.from(document.querySelectorAll(`div#${name} button.calculator-button-neg`))[0]
  var decimalButton = Array.from(document.querySelectorAll(`div#${name} button.calculator-button-decimal`))[0]

  visitorPostRequest(windowName, function(visitor){
    var calculatorKey = Object.keys(visitor).find(function(key){
      return key === name
    })
    if(calculatorKey){
      attachCalculatorListeners(name, visitor.id, visitor[calculatorKey])
    } else {
      calculatorPostRequest(visitor.id, name, function(calculator){
        attachCalculatorListeners(name, visitor.id)
      })
    }
  })
}
