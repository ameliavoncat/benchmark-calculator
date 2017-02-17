function addKeyDownListener(calculator){
  document.body.addEventListener('keydown', function(event){
    if(Array.from(document.getElementById(calculator.name).classList).includes('calculator-active') && !calculator.paused){
      var keyCode = event.keyCode
      if(event.shiftKey){
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
      } else {
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
            event.preventDefault()
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
    }
  })
}
