function getBrowser(userAgent){
  if(userAgent.indexOf('Chrome') > -1){
    return 'Chrome'
  } else if(userAgent.indexOf('Safari') > -1){
    return 'Safari'
  } else if(userAgent.indexOf('Opera') > -1){
    return 'Opera'
  } else if(userAgent.indexOf('Firefox') > -1){
    return 'Firefox'
  } else if(userAgent.indexOf('MSIE') > -1){
    return 'Internet Explorer'
  } else {
    return 'Some Weird Browser'
  }
}
