import React from 'react'
import { graphql, useStaticQuery, Link } from "gatsby"
import Image from "gatsby-image"
import styles from "./404.module.css"
const Custom404 = () => {


    const data = useStaticQuery(graphql`
    query {
      bgHero: file(relativePath: { eq: "404.png" }) {
        childImageSharp {
          fluid(quality: 90, maxHeight:600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

    return (
        <section class="hero is-fullheight has-background-primary">
        <div class="hero-body columns is-fluid">
          <div class="container column has-text-right">
            <h1 class="title is-size-1">
Salut ! Moi c'est Dora !            </h1>
<Image className="is-hidden-tablet is-hidden-desktop" fluid={data.bgHero.childImageSharp.fluid} />

            <h2 class="subtitle">
              Je vois que tu t'es perdu comme moi.<br /> Tu peux cliquer sur le bouton juste en dessous pour retrouver ton chemin !
            </h2>
            <Link to="/">
              <button className="button is-dark is-large is-uppercase is-vcentered">
                <span className={styles.buttonText}>Retrouver mon chemin</span>
              </button>
            </Link>
          </div>
          <div className="column is-hidden-mobile">
                <Image fluid={data.bgHero.childImageSharp.fluid} />
          </div>
        </div>
      </section>
    )
}

export default Custom404
