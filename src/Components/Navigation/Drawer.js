import React from 'react'
import Sidebar from 'react-sidebar'
import MenuIcon from './icons/menu.svg'
import HomeIcon from './icons/nav-home.svg'
import AboutIcon from './icons/nav-about.svg'
import WorksIcon from './icons/nav-works.svg'
import ContactIcon from './icons/nav-contact.svg'
import styles from '../../App.scss'
import { Menus, Items } from './MobileNav'
import Devices from '../Devices/Devices'
import packageJson from '../../../package.json'

const mql = window.matchMedia(`(max-width: 800px)`)

export default class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sidebarDocked: mql.matches,
      sidebarOpen: false,
    }

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this)
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this)
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged)
  }

  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged)
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open })
  }

  mediaQueryChanged() {
    this.setState({ sidebarDocked: mql.matches, sidebarOpen: false })
  }

  render() {
    return (
      <Sidebar
        sidebar={
          <Menus
            onClick={e => {
              const target = e.target.tagName
              if (
                target === 'DIV' ||
                target === 'VERSION' ||
                target === 'DEVICE'
              ) {
                this.onSetSidebarOpen(true)
              } else {
                setTimeout(() => {
                  this.onSetSidebarOpen(false)
                }, 300)
              }
            }}
          >
            <div className={styles.Nav_Logo} />
            <Items id="Nav_Link" section="home">
              <img alt="home" className={styles.Nav_Icon} src={HomeIcon} />
              Welcome
            </Items>
            <Items section="about">
              <img alt="about" className={styles.Nav_Icon} src={AboutIcon} />
              About
            </Items>
            <Items section="work">
              <img alt="works" className={styles.Nav_Icon} src={WorksIcon} />
              Works
            </Items>
            <Items section="contact">
              <img
                alt="contact"
                className={styles.Nav_Icon}
                src={ContactIcon}
              />
              Contact
            </Items>
            <div className={styles.Nav_Version}>
              <version>Version {packageJson.version}</version> - <Devices />
            </div>
          </Menus>
        }
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{
          sidebar: {
            position: 'fixed',
            backgroundColor: '#121212',
            minWidth: '255px',
          },
        }}
      >
        <div
          className={styles.Menu}
          onClick={() => this.onSetSidebarOpen(true)}
        >
          <img alt="menu" className={styles.Menu_Icon} src={MenuIcon} />
        </div>
      </Sidebar>
    )
  }
}
