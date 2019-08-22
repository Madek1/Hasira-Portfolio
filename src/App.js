import React, { Component } from 'react'
import { ScrollingProvider, Section } from 'react-scroll-section'
import NavBar from './Components/Navigation/Drawer'
import { loadReCaptcha } from 'react-recaptcha-google'

/* 

  -== Komponenty ==- 
  
*/

import Home from './Components/Sections/Welcome/Home'
import About from './Components/Sections/About/About'
import Work from './Components/Sections/Work/Work'
import Contact from './Components/Sections/Contact/Contact'
import { Menu, Item } from './Components/Navigation/Navigation'

/* 

  -== CSS ==- 
  
*/

import styles from './App.scss'

/* -== TODO ==-

  - Sprawdzanie Scrollowania
  - Scrollowanie co jedną sekcje (płynne przejście pomiędzy sekcjami)
  - Płynna animacja aktywnego linku (po kliknięciu), aka material design (slide horyzontalnie)
  - Płynna animacja aktywnego linku (po najechaniu), aka discord (powiększenie, pomniejszenie [po kliknięciu rozszerzenie])
  - Zrobienie dziłającego formularzu (po kliknięciu sumbit pokaże się wycentrowana captcha z zblurowanym/wyciemnionym tłem)
  - Naprawienie błedu braku chowania się SideNav podczas kliknięcia formularzu
  - Pomniejsze błedy związane z mobilnym css

*/

/*

  window.onscroll = function() {
    var lastScrollTop = 0
    var st = window.pageYOffset || document.documentElement.scrollTop
    if (st > lastScrollTop) {
        console.log('scrolling down')
      } else {
      console.log('up')
      }
    lastScrollTop = st <= 0 ? 0 : st //for mobile
  }

*/

class App extends Component {
  componentDidMount() {
    loadReCaptcha()
  }

  render() {
    return (
      <div className={styles.Root}>
        <div id="blind" className={styles.blind} />
        <div className={styles.Background} />
        <ScrollingProvider scrollBehavior="smooth">
          <div className={styles.Navigation_pc}>
            <Menu>
              <Item section="home">Welcome</Item>
              <Item section="about">About</Item>
              <Item section="work">Works</Item>
              <Item section="contact">Contact</Item>
            </Menu>
          </div>
          <div id="mobile" className={styles.Navigation_mobile}>
            <NavBar />
          </div>
          <Section id="home">
            <Home />
          </Section>
          <Section id="about">
            <About />
          </Section>
          <Section id="work">
            <Work />
          </Section>
          <Section id="contact">
            <Contact />
          </Section>
        </ScrollingProvider>
      </div>
    )
  }
}

export default App
