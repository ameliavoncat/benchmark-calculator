function addAllClearListener(button, calculator){
  button.addEventListener('click', function(event){
    if(!calculator.paused){
      var buttonValue = event.target.attributes.buttondata.value
      flashActive(buttonValue, calculator)
      clearButton(calculator)      
    }
  })
}
