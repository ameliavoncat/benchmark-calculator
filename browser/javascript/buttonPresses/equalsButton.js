function equalsButton(calculator, newOperation = null){
  function equalsCallback(response){
    calculator.total = response
    calculator.current = 0
    calculator.paused = false

    if(newOperation){
      calculator.operation = newOperation
      calculator.previous = calculator.total
    } else {
      calculator.operation = null
    }

    showNumberOnScreen('total', calculator)
    stopWaitingForDecimal(calculator)
  }
  if(calculator.operation){
    calculator.paused = true
    postRequestHelper(calculator.operation, calculator.previous, calculator.current, equalsCallback)
  }
}
