function flashActive(value, calculator){
  var button = document.querySelector(`div#${calculator.name} button[buttondata="${value}"]`)
  button.focus()
  blurElement(button)
}
