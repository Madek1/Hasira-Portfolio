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
    if (this.captchaDemo) {
      console.log('started, just a second...')
      this.captchaDemo.reset()
    }
  }
  onLoadRecaptcha() {
    if (this.captchaDemo) {
      this.captchaDemo.reset()
    }
  }
  verifyCallback(recaptchaToken) {
    // Here you will get the final recaptchaToken!!!
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
                    <button type="reset" value="Reset">
                      RESET
                    </button>
                    <button type="submit" value="Submit">
                      SUMBIT
                    </button>
                  </div>
                </form>
                <div className={styles.Hidden_ReCaptcha_Active} />
                <div className={styles.Hidden_ReCaptcha}>
                  {/* You can replace captchaDemo with any ref word */}
                  <ReCaptcha
                    ref={el => {
                      this.captchaDemo = el
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
