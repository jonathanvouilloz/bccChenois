import React from "react"
import TitleSection from "../../styledComponents/titleStyled"
import styles from "./cours.module.css"
import CoursInfo from "../../../constants/coursInfoJunior"
import {GiShuttlecock} from "react-icons/gi"

const cours = () => {

  

  return (
    <div class="container is-fluid has-text-centered">
      <TitleSection title="entraînement" subtitle="juniors" />
      <div class="is-fluid container">
        <div class="table-container has-text-centered">
          <table class="table is-fullwidth is-striped is-bordered">
            <thead>
                <th>Jour</th>
                <th>Lieu</th>
                <th>Début</th>
                <th>Fin</th>
                <th>Cat. d'âge</th>
                <th>Niveau</th>
                <th>Cours</th>
            </thead>
            <tbody>
              {CoursInfo.map((item, index) => {
                console.log(item)

                return (
                  <tr>
                    <p class=" is-hidden-desktop  is-hidden-tablet has-text-weight-bold">
                      <span class={styles.underline}>Cours du {item.jour}</span></p>
                    <td class=" is-hidden-mobile   is-hidden-tablet-only ">{item.jour}</td>
                    <td>{item.lieu}</td>
                    <td>{item.debut}</td>
                    <td>{item.fin}</td>
                    <td>{item.age}</td>
                    <td>{item.niveau}</td>
                    <td>{item.cours}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          
        </div>
        {/* <button class="button is-primary is-medium is-outlined is-uppercase">
                <span class={styles.essaiIcon}><GiShuttlecock /></span>
               <span class={styles.essai}>Venir faire un essai </span>
              </button> */}
        
      </div>
    </div>
  )
}

export default cours
