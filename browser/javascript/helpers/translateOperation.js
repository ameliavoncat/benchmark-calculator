function translateOperation(operation, a, b){
  switch(operation){
    case 'times':
      return function(a, b) { return a * b }
    case 'minus':
      return function(a, b) { return a - b }
    case 'plus':
      return function(a, b) { return a + b }
    case 'divide':
      return function(a, b) { return a / b }
    case 'modulo':
      return function(a, b) { return a % b }
    default:
      return function(a, b) { return b }
  }
}
