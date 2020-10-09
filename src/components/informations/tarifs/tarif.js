import React from "react"
import TitleSection from "../../styledComponents/titleStyled"
import styles from "./tarif.module.css"

const Tarif = () => {
  return (
    <div className={styles.containerMain}>
      <div class="container has-text-centered">
        <TitleSection title="Tarifs" subtitle="Club" />
        <div className="columns">
          <div className="column">
            <table class="table is-striped">
              <thead>
                <tr>
                  <th>
                    <abbr title="Date">
                      Cotisation du Badminton Club Chênois
                    </abbr>
                  </th>
                  <th>
                    <abbr title="Heure">Prix</abbr>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Admission au club <sup> 1 </sup>
                  </td>
                  <td>50.-</td>
                </tr>
                <tr>
                  <td>
                    Cotisation annuelle <sup> 2 </sup>
                  </td>
                  <td>170.-</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="column">
            <table class="table is-striped">
              <thead>
                <tr>
                  <th>
                    <abbr title="Date">Cotisation de Swiss Badminton</abbr>
                  </th>
                  <th>
                    <abbr title="Heure">Prix</abbr>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Licence junior (né en 2006 ou plus tard) <sup> 3 </sup>
                  </td>
                  <td>20.-</td>
                </tr>
                <tr>
                  <td>
                    Licence junior (né entre 2002 et 2005) <sup> 3 </sup>
                  </td>
                  <td>40.-</td>
                </tr>
                <tr>
                  <td>
                    Licence adulte (né avant 2002) <sup> 4 </sup>
                  </td>
                  <td>120.-</td>
                </tr>
                <tr>
                  <td>
                    Membre actif <sup> 5 </sup>
                  </td>
                  <td>30.-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
          <div className="container has-text-left">
          <div class="card-content">
            <span>
              <sup>1 </sup>: Montant unique perçu lors de la première année
              d'adhésion.
            </span>
            <br />
            <span>
              <sup>2 </sup>: Montant perçu chaque année d'adhésion.
            </span>
            <br />
            <span>
              <sup>3 </sup>: Montant obligatoire perçu chaque année d'ahésion et
              reversé à la fédération Swiss Badminton.
            </span>
            <br />
            <span>
              <sup>4 </sup>: Montant facultatif perçu aux adultes souhaitant
              faire de la compétition.
            </span>
            <br />
            <span>
              <sup>5 </sup>: Montant facultatif reversé à la Fédération Swiss
              Badminton.
            </span>
            </div>
          </div>

          <div class="container">
            <div class="card-content">
              <div class="content has-text-left">
                <h3>Coordonnées bancaires</h3>
                <span>Badminton Club Chênois</span><br/>
                <span>Case postale 135 1226 Thônex</span><br/>
                <span>IBAN CH 10 0900 0000 8455 1918 7 ou CCP 84-551918-7.</span><br/>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Tarif
