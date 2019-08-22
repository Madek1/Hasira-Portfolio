import React, { Component } from 'react'
import { ReCaptcha } from 'react-recaptcha-google'

/* CSS */
import root_styles from '../Home/CSS/Home.scss'
import styles from './CSS/Contact.scss'

class Contact extends Component {
  constructor(props, context) {
    super(props, context)
    this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this)
    this.verifyCallback = this.verifyCallback.bind(this)
  }

  componentDidMount() {
    if (this.captcha) {
      console.log('started, just a second...')
      this.captcha.reset()
    }
  }

  onLoadRecaptcha() {
    if (this.captcha) {
      this.captcha.reset()
    }
  }

  verifyCallback(recaptchaToken) {
    console.log(recaptchaToken, '<= your recaptcha token')
  }

  render() {
    return (
      <div className={root_styles.App}>
        <header className={root_styles.App_header}>
          <div className={root_styles.Section_Name_Box}>
            <h1 className={styles.Contact_Section_Name}>CONTACT</h1>
          </div>
          <div className={styles.Contact_FlexRoot}>
            <div className={styles.Contact_CenterSide}>
              <div className={styles.Contact_Subtitle}>
                Krystian@digital-service.pl
              </div>
              <div className={styles.Form_Box}>
                <form action="">
                  <input type="text" name="name" placeholder="Your Name" />
                  <input type="text" name="email" placeholder="Your Email" />
                  <input type="text" name="subject" placeholder="Subject" />
                  <textarea
                    type="text"
                    name="message"
                    placeholder="Your Meassage"
                  />
                  <div className={styles.Button_Box}>
                    <button>RESET</button>
                    <button>SUMBIT</button>
                  </div>
                </form>
                <div className={styles.Hidden_ReCaptcha_Active} />
                <div className={styles.Hidden_ReCaptcha}>
                  <ReCaptcha
                    ref={el => {
                      this.captcha = el
                    }}
                    size="normal"
                    data-theme="dark"
                    render="explicit"
                    sitekey="6LcLD7QUAAAAAEvC5ssllwnCz9k65dBDyP_2HFti"
                    onloadCallback={this.onLoadRecaptcha}
                    verifyCallback={this.verifyCallback}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footer}>© Copyright 2019</div>
        </header>
      </div>
    )
  }
}

export default Contact
