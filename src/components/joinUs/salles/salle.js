import React from "react"
import { Link , graphql, useStaticQuery} from "gatsby"
import styles from "./salles.module.css"
import Image from 'gatsby-image'


const Salle = ({ nom, adresse, imgMap, link, entrainement }) => {

  const data = useStaticQuery(graphql`
  query  {
    banner:file(relativePath: {eq: "marcelly.png"}) {
      childImageSharp {
        fluid(maxWidth:1600, quality:70, maxHeight:700)  {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `)

  return (
    <div class="column is-one-third container">
      <div class="box">
        <h2>
          <span>{nom}</span>
        </h2>
        <div class="has-text-left">
          <p>{adresse}</p>
          <figure>
            <Image fluid={data.banner.childImageSharp.fluid} />
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

export default Salle
