function operationPostRequest(operation, a, b, visitor_id, name, callback){
  var xmlRequest = new XMLHttpRequest()

  xmlRequest.onreadystatechange = function(){
    if(xmlRequest.status == 200 && xmlRequest.readyState == 4){
      var result = JSON.parse(xmlRequest.responseText).result
      callback(result)
    }
  }

  xmlRequest.open('POST', `http://localhost:3000/api/operations/${operation}`, true)
  xmlRequest.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
  xmlRequest.send(JSON.stringify({a, b, visitor_id, name}))
}

function visitorPostRequest(name, callback){
  var xmlRequest = new XMLHttpRequest()

  xmlRequest.onreadystatechange = function(){
    if(xmlRequest.status == 200 && xmlRequest.readyState == 4){
      var result = JSON.parse(xmlRequest.responseText).visitor
      callback(result)
    }
  }

  xmlRequest.open('POST', `http://localhost:3000/api/visitors`, true)
  xmlRequest.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
  xmlRequest.send(JSON.stringify({name}))
}

function calculatorPostRequest(visitor_id, name, callback){
  var xmlRequest = new XMLHttpRequest()

  xmlRequest.onreadystatechange = function(){
    if(xmlRequest.status == 200 && xmlRequest.readyState == 4){
      var result = JSON.parse(xmlRequest.responseText).calculator
      callback(result)
    }
  }

  xmlRequest.open('POST', `http://localhost:3000/api/calculators`, true)
  xmlRequest.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
  xmlRequest.send(JSON.stringify({visitor_id, name}))
}
