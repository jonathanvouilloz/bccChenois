import React from "react"
import { Link } from "gatsby"
import styles from "./salles.module.css"
import marcelly from "../../../images/marcelly.png"


const salle = ({ nom, adresse, imgMap, link, entrainement }) => {
  return (
    <div class="column is-one-third container">
      <div class="box">
        <h2>
          <span>{nom}</span>
        </h2>
        <div class="has-text-left">
          <p>{adresse}</p>
          <figure>
             <img src={marcelly} alt={nom} /> 
          </figure>
          <section class="columns">
            <div class="column has-text-left">
              <a  rel="noopener noreferrer" target="_blank" href={link} class="has-text-left">
                Ouvrir sur Google Maps
              </a>
            </div>
            <div class="column has-text-right has-text-left-mobile has-text-primary">
              <Link to="/joinUs">
                <span>Horaires entrainement</span>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default salle
