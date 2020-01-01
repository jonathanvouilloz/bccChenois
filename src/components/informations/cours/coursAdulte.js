import React from "react"
import TitleSection from "../../styledComponents/titleStyled"
import styles from "./cours.module.css"
import CoursInfo from "../../../constants/coursInfoAdulte"

const CoursAdulte = () => {


  return (
    <div className="container is-fluid has-text-centered">
      <TitleSection title="entraînement" subtitle="adultes" />
      <div className="is-fluid container">
        <div className="table-container has-text-centered">
          <table className="table is-fullwidth is-striped is-bordered">
            <thead>
            <tr>
                <th>Jour</th>
                <th>Lieu</th>
                <th>Début</th>
                <th>Fin</th>
                <th>Description</th>
                <th>Niveau</th>
            </tr>
            </thead>
            <tbody>
              {CoursInfo.map((item, index) => {

                return (
                  <tr>
                    <p className="is-hidden-desktop is-hidden-tablet has-text-weight-bold">
                      <span className={styles.underline}>Entraînement du {item.jour}</span>
                    </p>
                    <td className=" is-hidden-mobile   is-hidden-tablet-only ">
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
