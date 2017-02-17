function addKeyDownListener(calculator){
  document.body.addEventListener('keydown', function(event){
    var keyCode = event.keyCode
    if(event.shiftKey){
      switch(keyCode){
        case 53:
          flashActive('modulo')
          operationButton('modulo', calculator)
          break
        case 56:
          flashActive('times')
          operationButton('times', calculator)
          break
        case 61:
          flashActive('plus')
          operationButton('plus', calculator)
          break
      }
    } else {
      switch(keyCode){
        case 67:
          flashActive('ac')
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

          flashActive(digitString)
          numberButton(digitString, calculator)
          break
        case 191:
          flashActive('divide')
          operationButton('divide', calculator)
          event.preventDefault()
          break
        case 173:
          flashActive('minus')
          operationButton('minus', calculator)
          break
        case 61:
          flashActive('equals')
          equalsButton(calculator)
          break
        case 190:
          flashActive('decimal')
          decimalButton(calculator)
          break
      }
    }
  })
}
