function operationButton(value, calculator){
  if(calculator.operation) { equalsButton(calculator) }
  if(calculator.total !== 0){
    calculator.previous = calculator.total
    calculator.total = 0
  } else {
    calculator.previous = calculator.current
  }
  calculator.current = 0
  calculator.operation = translateOperation(value)
  showNumberOnScreen('previous', calculator)
  stopWaitingForDecimal(calculator)
}
