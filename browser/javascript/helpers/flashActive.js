function flashActive(value){
  var button = document.querySelector(`button[buttondata="${value}"]`)
  button.focus()
  blurButton(button)
}
