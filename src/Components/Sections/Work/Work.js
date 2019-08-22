import React, { Component } from 'react'

/* CSS */
import styles from './CSS/Work.scss'
import root_styles from '../Welcome/CSS/Home.scss'

/* Images */
import Potega_Obrazu from './Works-Image/potega-obrazu.pl.webp'
import Image_Power from './Works-Image/ImagePower.pl.webp'
import Sufitex from './Works-Image/sufitex.pl.webp'
import Speed_Bud from './Works-Image/speed-bud.webp'
import Villa_Iwona from './Works-Image/willa-ivona.webp'
import Zokis from './Works-Image/zokis.webp'
import Twoja_Harmonia from './Works-Image/twojaharmonia.webp'
import Hasira from './Works-Image/hasira.webp'

class Work extends Component {
  render() {
    return (
      <div className={root_styles.App}>
        <header className={root_styles.App_header}>
          <div className={root_styles.Section_Name_Box}>
            <h1 className={styles.Work_Section_Name}>RECENT WORKS</h1>
          </div>
          <div className={styles.Work_FlexRoot}>
            <div className={styles.Work_CenterSide}>
              <div className={styles.Work_Box_Wrapper}>
                <div className={styles.Work_Box_left}>
                  <div className={styles.Work_Box}>
                    <img
                      className={styles.Work_Box_Image}
                      src={Potega_Obrazu}
                      alt="PotegaObrazu"
                      onClick={() => {
                        window.location.href = 'https://potegaobrazu.pl/'
                      }}
                    />
                    <h6 className={styles.Work_Box_Title}>Potęga Obrazu</h6>
                  </div>
                  <div className={styles.Work_Box}>
                    <img
                      className={styles.Work_Box_Image}
                      src={Image_Power}
                      alt="ImagePower"
                      onClick={() => {
                        window.location.href = 'http://imagepower.pl/'
                      }}
                    />
                    <h6 className={styles.Work_Box_Title}>Image Power</h6>
                  </div>
                </div>
                <div className={styles.Work_Box_Right}>
                  <div className={styles.Work_Box}>
                    <img
                      className={styles.Work_Box_Image}
                      src={Sufitex}
                      alt="Sufitex"
                      onClick={() => {
                        window.location.href = 'https://sufitex.pl/'
                      }}
                    />
                    <h6 className={styles.Work_Box_Title}>Sufitex</h6>
                  </div>
                  <div className={styles.Work_Box}>
                    <img
                      className={styles.Work_Box_Image}
                      src={Speed_Bud}
                      alt="Speed-Bud-Trans"
                      onClick={() => {
                        window.location.href = 'https://speed-bud.com.pl/'
                      }}
                    />
                    <h6 className={styles.Work_Box_Title}>Speed-Bud-Trans</h6>
                  </div>
                </div>
              </div>
              <div className={styles.Work_Box_Wrapper}>
                <div className={styles.Work_Box_left}>
                  <div className={styles.Work_Box}>
                    <img
                      className={styles.Work_Box_Image}
                      src={Villa_Iwona}
                      alt="Willa Iwona"
                      onClick={() => {
                        window.location.href = 'http://pokojeciechocinek.pl/'
                      }}
                    />
                    <h6 className={styles.Work_Box_Title}>Willa Iwona</h6>
                  </div>
                  <div className={styles.Work_Box}>
                    <img
                      className={styles.Work_Box_Image}
                      src={Zokis}
                      alt="Zokis"
                      onClick={() => {
                        window.location.href = 'http://zokis.eu/'
                      }}
                    />
                    <h6 className={styles.Work_Box_Title}>Żokis</h6>
                  </div>
                </div>
                <div className={styles.Work_Box_Right}>
                  <div className={styles.Work_Box}>
                    <img
                      className={styles.Work_Box_Image}
                      src={Twoja_Harmonia}
                      alt="Twoja Harmonia"
                      onClick={() => {
                        window.location.href = 'http://twojaharmonia.pl/'
                      }}
                    />
                    <h6 className={styles.Work_Box_Title}>Twoja Harmonia</h6>
                  </div>
                  <div className={styles.Work_Box}>
                    <img
                      className={styles.Work_Box_Image}
                      src={Hasira}
                      alt="Hasira Portfolio"
                      onClick={() => {
                        window.location.href = 'https://hasiraa.com'
                      }}
                    />
                    <h6 className={styles.Work_Box_Title}>Hasira Portfolio</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    )
  }
}

export default Work
