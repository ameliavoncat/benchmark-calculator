function negativeButton(calculator){
  calculator.current = -(calculator.current)
  showNumberOnScreen('current', calculator)
  stopWaitingForDecimal(calculator)
}
