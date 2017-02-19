function equalsButton(calculator, newOperation = null){
  function equalsCallback(response){
    calculator.total = response
    calculator.history.push(calculator.total)
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
    operationPostRequest(calculator.operation, calculator.previous, calculator.current, calculator.visitorId, calculator.name, equalsCallback)
  }
}
