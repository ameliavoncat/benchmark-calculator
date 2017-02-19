function keyCodeSwitch(keyCode, calculator, event){
  switch(keyCode){
    case 67:
      flashActive('ac', calculator)
      clearButton(calculator)
      break
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
    case 48:
      var digitString = String.fromCharCode(keyCode)

      flashActive(digitString, calculator)
      numberButton(digitString, calculator)
      break
    case 191:
      flashActive('divide', calculator)
      operationButton('divide', calculator)
      if(event){ event.preventDefault() }
      break
    case 173:
      flashActive('minus', calculator)
      operationButton('minus', calculator)
      break
    case 61:
      flashActive('equals', calculator)
      equalsButton(calculator)
      break
    case 190:
      flashActive('decimal', calculator)
      decimalButton(calculator)
      break
  }
}
