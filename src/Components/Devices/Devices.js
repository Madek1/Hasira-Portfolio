import React, { Component } from 'react'

var isMobile = {
  Android: function() {
    return navigator.userAgent.match(/Android/i)
  },
  BlackBerry: function() {
    return navigator.userAgent.match(/BlackBerry/i)
  },
  iOS: function() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i)
  },
  Opera: function() {
    return navigator.userAgent.match(/Opera Mini/i)
  },
  Windows: function() {
    return navigator.userAgent.match(/IEMobile/i)
  },
  any: function() {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    )
  },
  none: function() {
    return !isMobile.any()
  },
}

var Mobile = ''

if (isMobile.any()) {
  var Mobile = 'mobile'
  if (isMobile.iOS()) {
    var Mobile = 'iOS'
  } else if (isMobile.Android()) {
    var Mobile = 'Android'
  } else if (isMobile.BlackBerry()) {
    var Mobile = 'BlackBerry'
  } else if (isMobile.Windows()) {
    var Mobile = 'Windows'
  } else {
    var Mobile = 'other'
  }
} else if (isMobile.none()) {
  var Mobile = 'PC'
} else {
  var Mobile = 'unknown'
}

class Devices extends Component {
  render() {
    return <device>{Mobile}</device>
  }
}

export default Devices
