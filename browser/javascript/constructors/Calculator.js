function Calculator(previous, current, total, operation, waitingForDecimal, visitorId, name, history = []){
  this.previous = previous
  this.current = current
  this.total = total
  this.operation = operation
  this.waitingForDecimal = waitingForDecimal
  this.name = name
  this.visitorId = visitorId
  this.paused = false
  this.history = history
}
