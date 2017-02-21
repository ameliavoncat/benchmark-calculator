function decimalButton(calculator){
  if(!String(calculator.current).split('').includes('.')){
    calculator.waitingForDecimal = true
  }
}
