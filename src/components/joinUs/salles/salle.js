import React from "react"
import { Link } from "gatsby"
import styles from "./salles.module.css"
import Image from 'gatsby-image'


const Salle = ({ nom, adresse, img, link, }) => {


  return (


    <div className="column is-one-third container">
      <div className="box">
        <h2>
          <span>{nom}</span>
        </h2>
        <div className="has-text-left">
          <p>{adresse}</p>
          <figure>
            <Image fluid={img} />
          </figure>
          <section className="columns">
            <div className="column has-text-left">
              <a target="_blank" rel="noopener noreferrer" href={link} className="has-text-left">
                Ouvrir sur Google Maps
              </a>
            </div>
            <div className="column has-text-right has-text-left-mobile has-text-primary">
              <Link to="/inscription">
                <span>Horaires entrainement</span>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Salle
