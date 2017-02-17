function Calculator(previous, current, total, operation, waitingForDecimal, name){
  this.previous = previous
  this.current = current
  this.total = total
  this.operation = operation
  this.waitingForDecimal = waitingForDecimal
  this.name = name
  this.paused = false
}
