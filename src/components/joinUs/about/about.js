import React from "react"
import TitleSection from "../../styledComponents/titleStyled"
import styles from "./about.module.css"
import Image from 'gatsby-image'
import {graphql, useStaticQuery} from 'gatsby'

const About = () => {

  const data = useStaticQuery(graphql`
  query  {
    banner:file(relativePath: {eq: "banner-club.jpg"}) {
      childImageSharp {
        fluid(maxWidth:1600, quality:70, maxHeight:700)  {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `)

  return (
    <div className="">
      <Image fluid={data.banner.childImageSharp.fluid} />
      <div className="container is-fluid">
        <div className="has-text-centered">
          <TitleSection title="À propos" subtitle="de nous" primary />
        </div>
        <div className={styles.aboutUs}>
         Bonjour tout le monde, ici Henri en direct d'Oklahoma City.
        </div>
      </div>
    </div>
  )
}

export default About
