function clearButton(calculator){
  calculator.previous = 0
  calculator.current = 0
  calculator.total = 0
  showNumberOnScreen('previous', calculator)
  stopWaitingForDecimal(calculator)
}
