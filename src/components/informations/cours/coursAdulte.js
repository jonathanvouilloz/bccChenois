import React from "react"
import TitleSection from "../../styledComponents/titleStyled"
import "./cours.css"
import CoursInfo from "../../../constants/coursInfoAdulte"

const CoursAdulte = () => {
  return (
    <div className="containerCours">
      <div className="container has-text-centered">
        <TitleSection title="entraînement" subtitle="adultes" />
        <div className="is-fluid container">
          <div className="table-container has-text-centered">
            <table className="table is-fullwidth is-bordered tableA">
              <thead>
                <tr className="has-background-white-ter">
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
                      <td className="has-background-white-ter">{item.jour}</td>
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
    </div>
  )
}

export default CoursAdulte
