import React from "react"
import TitleSection from "../styledComponents/titleStyled"
import Equipe from "./equipe"
import { Link } from "gatsby"
import styles from "./interclub.module.css"
import Calendrier from "./calendar"

const Interclub = () => {
  return (
    <div>
      <div className="container has-text-centered">
        <TitleSection subtitle="interclub" title="Calendrier" />
        <div className="container">
          <div className="container has-text-left">
            <div className={styles.aboutInter}>
              <Calendrier />
            </div>
          </div>

          <TitleSection title="Resultats" subtitle="BC Chenois" primary />
          <br />

          <div className="container is-fluid">
            <div class="columns">
            <div className="column is-4">
                <Link to="/interclub/2020">
                  <span className={styles.saison}>Saison 2020 - 2021</span>
                </Link>
              </div>
              <div className="column is-4">
                <Link to="/interclub/2019">
                  <span className={styles.saisonFinie}>Saison 2019 - 2020</span>
                </Link>
              </div>
            </div>
          </div>
          <br />
          <Equipe />
        </div>
      </div>
    </div>
  )
}

export default Interclub
