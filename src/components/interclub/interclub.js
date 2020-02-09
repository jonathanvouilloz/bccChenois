import React from "react"
import TitleSection from "../styledComponents/titleStyled"
import Equipe from "./equipe"
import { Link } from 'gatsby'
import styles from "./interclub.module.css"

const Interclub = () => {

  return (
    <div className="container has-text-centered">
      <TitleSection subtitle="interclub" primary />
      <div className="container">
        <div className="container has-text-left">
          <div className={styles.aboutInter}>
            <h2 className="is-size-5 is-uppercase">L'interclub, c'est quoi ?</h2>
            <article class="container">
              <p>
                Le championnat interclubs de badminton oppose des équipes de
                niveau semblable regroupées en quatre ligues. La 3e et la 4e
                ligue sont régionales, seules des équipes du canton de Genève y
                participent. <br />Chacune des rencontres entre deux clubs se dispute
                en sept matchs :
              </p>
              <ul>
                <li>
                  3 Simples messieurs
                </li>
                <li>
                  1 Simple dame
                </li>
                <li> 1 Double messieurs</li>
                <li> 1 Double dames</li>
                <li> 1 Double mixte</li>
              </ul>
              <br />
              <p>
                Un système de points permet d'effectuer un classement des
                équipes à la fin de la saison.
              </p>
              <ul>

                <li> Une victoire 7-0 ou 6-1 rapporte 3 points</li>
                <li>              Une victoire 5-2 ou 4-3 rapporte 2 points
<li>
                  </li>              Une défaite 3-4 ou 2-5 rapporte 1 points
</li><li>
                  Une défaite 6-1 ou 7-0 rapporte 0 points
                  
</li></ul><br />
              <p>Vous retrouverez sur notre site nos équipes ainsi que les résumé des interclubs.<br /> Si vous souhaitez plus d'informations sur les interclub vous pouvez contacter <strong>Adrien Ourny (0xxxxxxxxx)</strong>, notre responsable interclub. <br /><br />Vous pouvez également visiter le site officiel des IC Suisse : <a target="_blank" rel="noopener" href="https://www.swiss-badminton.ch/">Swiss Badminton.</a></p>
              
             

            </article>
          </div>
        </div>

        <TitleSection title="Resultats" subtitle="BC Chenois" primary />

        <div className="container is-fluid">

<div class="columns">


  <div className="column is-3"><Link to="interclub/2019">
      <span className={styles.saison}>Saison 2019 - 2020</span>
      </Link>
  </div>
</div>
</div>

        <Equipe />
      </div>
    </div>
  )
}

export default Interclub
