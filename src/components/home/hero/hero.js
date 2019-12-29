import React from "react"
import BackgroundImage from 'gatsby-background-image'
import styles from "./hero.module.css"
import {graphql, useStaticQuery} from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Hero = () => {

  const data = useStaticQuery(graphql`
  query {
    bgHero:file(relativePath:{eq:"bg-hero.jpg"}) {
      childImageSharp {
        fluid (quality: 90, maxHeight:1080){
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `)
  
  return (
    <BackgroundImage fluid={data.bgHero.childImageSharp.fluid} >
      <section class="hero is-fullheight">
        <div class="hero-body">
          <div class="container has-text-centered is-uppercase">
            <h1 className={styles.titleHero}><span class="has-text-primary">b</span>adminton <span class="has-text-primary">C</span>lub <span class="has-text-primary">C</span>hênois</h1>
            <h3 className={styles.titleSecond}>
              Retrouve notre actualité et tous plein d'autre informations
              concernant notre club !
            </h3>
            <br/>
            <AniLink  to="./joinUs">
              <button class="button is-primary is-inverted is-outlined is-large is-uppercase ">
              faire un essai
              </button>
                
           
            
            </AniLink>
          </div>
        </div>

      </section>

    </BackgroundImage>
  )
}



export default Hero
