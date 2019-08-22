import React, { Component } from 'react'

/* CSS */
import root_styles from '../Home/CSS/Home.scss'
import styles from './CSS/About.scss'

class About extends Component {
  render() {
    return (
      <div className={root_styles.App}>
        <header className={root_styles.App_header}>
          <div className={root_styles.Section_Name_Box}>
            <h1 className={styles.About_Section_Name}>WHO I'AM?</h1>
          </div>
          <div className={styles.About_FlexRoot}>
            <div className={styles.About_LeftSide}>
              <div className={styles.About_Info_Wrapper}>
                <div className={styles.About_Info_Connector}>
                  <div className={styles.About_Info_Core}>
                    <h6 className={styles.About_Info_Title}>CLEAN FACTS</h6>
                    <p className={styles.About_Info_Text}>
                      My name is{' '}
                      <b className={styles.About_Info_Name}>Krystian</b>. ( for
                      friends Kris )
                    </p>
                    <p className={styles.About_Info_Text}>I'm 18 y.o.</p>
                    <p className={styles.About_Info_Text}>
                      I live in a small village in Poland.
                    </p>
                    <p className={styles.About_Info_Text}>
                      I love animals and IT.
                    </p>
                    <p className={styles.About_Info_Text}>
                      Self-taught young web developer.
                    </p>
                    <p className={styles.About_Info_Text}>
                      In the future I'm going to do more than just simple
                      website.
                    </p>
                  </div>
                  <div className={styles.About_Info_Core}>
                    <h6 className={styles.About_Info_Title}>WHAT I DO?</h6>
                    <p className={styles.About_Info_Text}>
                      I make websites with passion.
                    </p>
                    <p className={styles.About_Info_Text}>
                      I do my best to do everything well.
                    </p>
                    <p className={styles.About_Info_Text}>
                      I can create a simple and uncomplicated website for you.
                    </p>
                  </div>
                </div>
                <div className={styles.About_Info_Connector}>
                  <div className={styles.About_Info_Core}>
                    <h6 className={styles.About_Info_Title}>MY SKILLS</h6>
                    <p className={styles.About_Info_Text}>
                      I know the{' '}
                      <b className={styles.About_Info_HTML5}>HTML5</b> structure
                      very well.
                    </p>
                    <p className={styles.About_Info_Text}>
                      I also know <b className={styles.About_Info_CSS3}>CSS3</b>{' '}
                      very well.
                    </p>
                    <p className={styles.About_Info_Text}>
                      I'm learning{' '}
                      <b className={styles.About_Info_JavaScript}>JavaScript</b>{' '}
                      structure but i know the basics.
                    </p>
                    <p className={styles.About_Info_Text}>
                      <b className={styles.About_Info_REACT}>REACT</b> is black
                      magic for me, but I have enough to see to make an
                      application like this page :)
                    </p>
                  </div>
                  <div className={styles.About_Info_Core}>
                    <h6 className={styles.About_Info_Title}>FUN FACTS</h6>
                    <p className={styles.About_Info_Text}>
                      I've belonged to the{' '}
                      <span className={styles.About_Spoiler}>furry fandom</span>{' '}
                      for 10 years.
                    </p>
                    <p className={styles.About_Info_Text}>
                      I'm very weak at{' '}
                      <span className={styles.About_Spoiler}>mathematics</span>.
                    </p>
                    <p className={styles.About_Info_Text}>
                      I'm creative, but very{' '}
                      <span className={styles.About_Spoiler}>shy</span>.
                    </p>
                    <p className={styles.About_Info_Text}>
                      I've never been a{' '}
                      <span className={styles.About_Spoiler}>good student</span>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.About_RightSide}>
              <div className={styles.About_Skill}>
                <div className={styles.About_Skill_Root_HTML}>
                  <p className={styles.About_Skill_Title_HTML}>HTML5</p>
                </div>
                <div className={styles.About_Skill_Progress}>
                  <span className={styles.HTML} />
                  <p className={styles.About_Skill_Number}>80%</p>
                </div>
              </div>
              <div className={styles.About_Skill}>
                <div className={styles.About_Skill_Root_CSS}>
                  <p className={styles.About_Skill_Title_CSS}>CSS3</p>
                </div>
                <div className={styles.About_Skill_Progress}>
                  <span className={styles.CSS} />
                  <p className={styles.About_Skill_Number}>95%</p>
                </div>
              </div>
              <div className={styles.About_Skill}>
                <div className={styles.About_Skill_Root_JS}>
                  <p className={styles.About_Skill_Title_JS}>JavaScript</p>
                </div>
                <div className={styles.About_Skill_Progress}>
                  <span className={styles.JS} />
                  <p className={styles.About_Skill_Number}>40%</p>
                </div>
              </div>
              <div className={styles.About_Skill}>
                <div className={styles.About_Skill_Root_REACT}>
                  <p className={styles.About_Skill_Title_REACT}>REACT</p>
                </div>
                <div className={styles.About_Skill_Progress}>
                  <span className={styles.REACT} />
                  <p className={styles.About_Skill_Number}>20%</p>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    )
  }
}

export default About
