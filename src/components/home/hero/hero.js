import React from "react"
import BackgroundImage from "gatsby-background-image"
import styles from "./hero.module.css"
import { graphql, useStaticQuery, Link } from "gatsby"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      bgHero: file(relativePath: { eq: "bg-hero2.jpg" }) {
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
              badminton{" "}
              Club{" "}
              Chênois
            </h1>
            <h3 className={styles.titleSecond}>
              Retrouvez notre actualité et tous plein d'autres informations
              concernant notre club !
            </h3>
            <br />
            <Link to="./inscription">
              <button className="button is-large is-danger is-outlined is-uppercase">
                nous rejoindre
              </button>
            </Link>
          </div>
        </div>
      </section>
    </BackgroundImage>
  )
}

export default Hero
