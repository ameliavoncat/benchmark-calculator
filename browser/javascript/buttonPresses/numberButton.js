function numberButton(value, calculator) {
  if(!calculator.operation){ calculator.total = 0 }
  calculator.current = calculator.waitingForDecimal
    ? Number(String(calculator.current) + '.' + value)
    : Number(String(calculator.current) + value)

  stopWaitingForDecimal(calculator)
  showNumberOnScreen('current', calculator)
}
