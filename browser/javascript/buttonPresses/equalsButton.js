function equalsButton(calculator){
  if(calculator.operation){
    calculator.total = calculator.operation(calculator.previous, calculator.current)
    calculator.operation = null
    calculator.current = 0
    showNumberOnScreen('total', calculator)
    stopWaitingForDecimal(calculator)
  }
}
