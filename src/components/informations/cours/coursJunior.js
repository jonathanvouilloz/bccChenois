import React from "react"
import TitleSection from "../../styledComponents/titleStyled"
import "./cours.css"
import {Link} from 'gatsby'
import CoursInfo from "../../../constants/coursInfoJunior"

const cours = () => {
  return (
    <div className="containerCours">
      <div className="container has-text-centered">
        <TitleSection title="entraînement" subtitle="juniors" primary />
        <div className="is-fluid container">
          <div className="table-container has-text-centered">
            <table className="table is-fullwidth  is-bordered tableA">
              <thead>
                <tr className="has-background-white-ter">
                  <th>Jour</th>
                  <th>Lieu</th>
                  <th>Début</th>
                  <th>Fin</th>
                  <th>Cat. d'âge</th>
                  <th>Niveau</th>
                  <th>Cours</th>
                </tr>
              </thead>
              <tbody>
                {CoursInfo.map((item, index) => {
                  return (
                    <tr>
                      <td className="has-background-white-ter">{item.jour}</td>
                      <td><Link to="/informations#salles">{item.lieu}</Link></td>
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
            <p className="has-text-left">
              Tu peux venir faire un essai gratuitement ! Préviens juste notre
              coach principal à ce numéro : <strong>076 616 17 75</strong> ou
              par mail à : <strong>bcchenois@gmail.com</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default cours
