function switchActiveCalculator(cssId){
  switch(cssId){
    case 'calculator-1':
      document.getElementById('calculator-1').classList.add('calculator-active')
      document.getElementById('calculator-2').classList.remove('calculator-active')
      break
    case 'calculator-2':
      document.getElementById('calculator-2').classList.add('calculator-active')
      document.getElementById('calculator-1').classList.remove('calculator-active')
      break
  }
}
