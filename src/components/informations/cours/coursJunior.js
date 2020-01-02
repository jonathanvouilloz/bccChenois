import React from "react"
import TitleSection from "../../styledComponents/titleStyled"
import styles from "./cours.module.css"
import CoursInfo from "../../../constants/coursInfoJunior"

const cours = () => {

  

  return (
    <div className="container is-fluid has-text-centered">
      <TitleSection title="entraînement" subtitle="juniors" primary />
      <div className="is-fluid container">
        <div className="table-container has-text-centered">
          <table className="table is-fullwidth  is-bordered">
            <thead>
            <tr className="has-background-white-ter">
                <th>Jour</th>
                <th>Lieu</th>
                <th>Début</th>
                <th>Fin</th>
                <th>Cat. d'âge</th>
                <th>Niveau</th>
                <th>Cours</th>
            </tr></thead>
            <tbody>
              {CoursInfo.map((item, index) => {

                return (
                  <tr>
                    <td className="has-background-white-ter">{item.jour}</td>
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
        {/* <button className="button is-primary is-medium is-outlined is-uppercase">
                <span className={styles.essaiIcon}><GiShuttlecock /></span>
               <span className={styles.essai}>Venir faire un essai </span>
              </button> */}
        
      </div>
    </div>
  )
}

export default cours
