function shiftKeyCodeSwitch(keyCode, calculator){
  switch(keyCode){
    case 53:
    flashActive('modulo', calculator)
    operationButton('modulo', calculator)
    break
    case 56:
    flashActive('times', calculator)
    operationButton('times', calculator)
    break
    case 61:
    flashActive('plus', calculator)
    operationButton('plus', calculator)
    break
  }
}
