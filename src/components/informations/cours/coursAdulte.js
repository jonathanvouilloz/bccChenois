import React from "react"
import TitleSection from "../../styledComponents/titleStyled"
import styles from "./cours.module.css"
import CoursInfo from "../../../constants/coursInfoAdulte"

const CoursAdulte = () => {


  return (
    <div class="container is-fluid has-text-centered">
      <TitleSection title="entraînement" subtitle="adultes" primary />
      <div class="is-fluid container">
        <div class="table-container has-text-centered">
          <table class="table is-fullwidth is-striped is-bordered">
            <thead>
                <th>Jour</th>
                <th>Lieu</th>
                <th>Début</th>
                <th>Fin</th>
                <th>Description</th>
                <th>Niveau</th>
            </thead>
            <tbody>
              {CoursInfo.map((item, index) => {
                console.log(item)

                return (
                  <tr>
                    <p class="is-hidden-desktop is-hidden-tablet has-text-weight-bold">
                      <span class={styles.underline}>Entraînement du {item.jour}</span>
                    </p>
                    <td class=" is-hidden-mobile   is-hidden-tablet-only ">
                      {item.jour}
                    </td>
                    <td>{item.lieu}</td>
                    <td>{item.debut}</td>
                    <td>{item.fin}</td>
                    <td>{item.description}</td>
                    <td>{item.niveau}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default CoursAdulte
