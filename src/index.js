import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'

/* 

  -== CSS ==- 
  
*/

import './index.scss'
import './fonts.scss'

ReactDOM.render(<App />, document.getElementById('app'))

/* 

  -== Funkcje ==- 

*/

function AnimacjaStartowa() {
  const fadeTarget = document.getElementById('blind')
  const SetScrollableTarget = document.getElementById('body')
  const fadeEffect = setInterval(function() {
    // Najpierw wykonaj rozjaśnienie strony
    if (!fadeTarget.style.opacity) {
      fadeTarget.style.opacity = 1
    }
    if (fadeTarget.style.opacity > 0) {
      fadeTarget.style.opacity -= 0.1
    } else {
      // Teraz usuń nadane efekty (Block Zaślepki i przywróć scroll)
      fadeTarget.style.display = 'none'
      SetScrollableTarget.style.overflow = 'visible'
      clearInterval(fadeEffect)
    }
  }, 50)
}

// Wykonaj Funcję po załadowaniu strony
document.addEventListener('DOMContentLoaded', e => {
  AnimacjaStartowa()
})

serviceWorker.unregister()
