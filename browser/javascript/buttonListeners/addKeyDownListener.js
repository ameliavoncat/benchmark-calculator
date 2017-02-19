function addKeyDownListener(calculator){
  document.body.addEventListener('keydown', function(event){
    if(Array.from(document.getElementById(calculator.name).classList).includes('calculator-active') && !calculator.paused){
      var keyCode = event.keyCode
      if(event.shiftKey){
        shiftKeyCodeSwitch(keyCode, calculator)
      } else {
        keyCodeSwitch(keyCode, calculator, event)
      }
    }
  })
}
