import React, { Component } from 'react'
import { ScrollingProvider, Section } from 'react-scroll-section'
import NavBar from './Components/Navigation/Drawer'
import { loadReCaptcha } from 'react-recaptcha-google'

//Components
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Work from './Components/Work/Work'
import Contact from './Components/Contact/Contact'
import { Menu, Item } from './Components/Navigation/Navigation'

//Style
import styles from './App.scss'

/*window.onscroll = function() {
  var lastScrollTop = 0
  var st = window.pageYOffset || document.documentElement.scrollTop
  if (st > lastScrollTop) {
      console.log('scrolling down')
    } else {
      console.log('up')
    }
  lastScrollTop = st <= 0 ? 0 : st //for mobile
}*/

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
