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
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </div>
      </div>
    </div>
  )
}

export default About
