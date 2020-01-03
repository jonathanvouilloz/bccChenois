import React from "react"
import BackgroundImage from "gatsby-background-image"
import styles from "./hero.module.css"
import { graphql, useStaticQuery, Link } from "gatsby"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      bgHero: file(relativePath: { eq: "bg-hero.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxHeight: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <BackgroundImage fluid={data.bgHero.childImageSharp.fluid}>
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered is-uppercase">
            <h1 className={styles.titleHero}>
              <span className="has-text-primary">b</span>adminton{" "}
              <span className="has-text-primary">C</span>lub{" "}
              <span className="has-text-primary">C</span>hênois
            </h1>
            <h3 className={styles.titleSecond}>
              Retrouve notre actualité et tous plein d'autre informations
              concernant notre club !
            </h3>
            <br />
            <Link to="./inscription">
              <button className="button is-primary is-large is-outlined is-uppercase">
                faire un essai
              </button>
            </Link>
          </div>
        </div>
      </section>
    </BackgroundImage>
  )
}

export default Hero
