import React, { Component } from 'react'
import styles from './CSS/Home.scss'
import avatar from '../../icons/avatar.webp'
import code from '../../icons/code.svg'
import telegram from '../../icons/social-telegram.svg'
import facebook from '../../icons/social-facebook.svg'
import steam from '../../icons/social-steam.svg'
import twitter from '../../icons/social-twitter.svg'

class Home extends Component {
  render() {
    return (
      <div className={styles.App}>
        <header className={styles.App_header}>
          <div className={styles.FlexRoot}>
            <div className={styles.LeftSide}>
              <h1 className={styles.Horrow}>Welcome</h1>
              <div className={styles.Avatar_Box}>
                <img src={avatar} className={styles.Avatar} alt="logo" />
              </div>
            </div>
            <div className={styles.RightSide}>
              <p className={styles.Name}>I'm Kris</p>
              <div className={styles.Web_Dev_Wrapper}>
                <p className={styles.Web_Dev}>Web Dev</p>
                <img
                  alt="code"
                  src={code}
                  className={styles.Code}
                  styles="opacity:1"
                />
              </div>
            </div>
          </div>
          <div className={styles.Social_Box}>
            <div className={styles.Social_icons}>
              <div
                className={styles.Social_Wrapper}
                onClick={() => {
                  window.location.href = 'https://t.me/s/Hasirka'
                }}
              >
                <img alt="telegram" src={telegram} />
                <br />
                <span>Telegram</span>
              </div>
              <div
                className={styles.Social_Wrapper}
                onClick={() => {
                  window.location.href = 'https://facebook.com/hasiraa'
                }}
              >
                <img alt="facebook" src={facebook} />
                <br />
                <span>Facebook</span>
              </div>
              <div
                className={styles.Social_Wrapper}
                onClick={() => {
                  window.location.href =
                    'https://steamcommunity.com/id/Hasiraa/'
                }}
              >
                <img alt="steam" src={steam} />
                <br />
                <span>Steam</span>
              </div>
              <div
                className={styles.Social_Wrapper}
                onClick={() => {
                  window.location.href = 'https://twitter.com/Hasirka'
                }}
              >
                <img alt="twitter" src={twitter} />
                <br />
                <span>Twitter</span>
              </div>
            </div>
          </div>
        </header>
      </div>
    )
  }
}

export default Home
