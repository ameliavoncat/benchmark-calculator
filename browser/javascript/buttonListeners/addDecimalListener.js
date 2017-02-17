function addDecimalListener(button, calculator){
  button.addEventListener('click', function(event){
    var buttonValue = event.target.attributes.buttondata.value
    flashActive(buttonValue)
    decimalButton(calculator)
  })
}
