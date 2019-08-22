import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import './fonts.scss'
import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('app'))

function fadeOutEffect() {
  const fadeTarget = document.getElementById('blind')
  const fadeEffect = setInterval(function() {
    if (!fadeTarget.style.opacity) {
      fadeTarget.style.opacity = 1
    }
    if (fadeTarget.style.opacity > 0) {
      fadeTarget.style.opacity -= 0.1
    } else {
      clearInterval(fadeEffect)
    }
  }, 50)
}

function hideZaslepka() {
  const HideTarget = document.getElementById('blind')
  const HideEffect = setInterval(function() {
    HideTarget.style.display = 'none'
    clearInterval(HideEffect)
  }, 500)
}

function doScrollable() {
  const SetScrollableTarget = document.getElementById('body')
  const SetScrollableEffect = setInterval(function() {
    SetScrollableTarget.style.overflow = 'visible'
    clearInterval(SetScrollableEffect)
  }, 500)
}

document.addEventListener('DOMContentLoaded', event => {
  fadeOutEffect()
  hideZaslepka()
  doScrollable()
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
