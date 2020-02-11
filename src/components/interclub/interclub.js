import React from "react"
import TitleSection from "../styledComponents/titleStyled"
import Equipe from "./equipe"
import { Link } from "gatsby"
import styles from "./interclub.module.css"
import Loadable from "react-loadable"
import "./calendar.scss"

const LoadableCallendar = Loadable({
  loader: () => import("./calendar"),
  loading() {
    return <div>Loading...</div>
  },
})

const Interclub = () => {
  return (
    <div>
      <div className={styles.calendar}></div>
      <div className="container has-text-centered">
        <TitleSection subtitle="interclub" title="Calendrier" />
        <div className="container">
          <div className="container has-text-left">
            <div className={styles.aboutInter}>
              <LoadableCallendar />
              <span className="testt">oupoa</span>
              <article class="container"></article>
            </div>
          </div>

          <TitleSection title="Resultats" subtitle="BC Chenois" primary />

          <div className="container is-fluid">
            <div class="columns">
              <div className="column is-3">
                <Link to="interclub/2019">
                  <span className={styles.saison}>Saison 2019 - 2020</span>
                </Link>
              </div>
            </div>
          </div>

          <Equipe />
        </div>
      </div>
    </div>
  )
}

export default Interclub
