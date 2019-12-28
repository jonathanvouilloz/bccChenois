import React from "react"
import TitleSection from "../../styledComponents/titleStyled"
import Salle from "./salle"
import {useStaticQuery, graphql} from 'gatsby'
import InfoSalles from "../../../constants/sallesInfos"

const Salles = () => {

  const data =  useStaticQuery(graphql`
  query  {
    marcelly:file(relativePath: {eq: "ecole-marcelly.PNG"}) {
      childImageSharp {
        fluid(maxWidth:800, quality:70, maxHeight:600)  {
          ...GatsbyImageSharpFluid
        }
      }
    }
    candolle:file(relativePath: {eq: "college-candole.PNG"}) {
      childImageSharp {
        fluid(maxWidth:800, quality:70, maxHeight:600)  {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bois:file(relativePath: {eq: "bois-arts.png"}) {
      childImageSharp {
        fluid(maxWidth:800, quality:70, maxHeight:600)  {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `)


  return (
    <div className="container is-fluid has-text-centered">
      <TitleSection title="Nos salles" subtitle="à disposition" primary />
      <div class="columns">
    
                <Salle nom="Candolle" adresse="henry 3" img={data.candolle.childImageSharp.fluid} link={InfoSalles[2].link}  />
                <Salle nom="Marcelly" adresse="henry 3" img={data.marcelly.childImageSharp.fluid} link={InfoSalles[0].link} />
                <Salle nom="Bois-des-Arts" adresse="henry 3" img={data.bois.childImageSharp.fluid} link={InfoSalles[1].link}/>

   
 
      </div>
      <br />
    </div>
  )
}

export default Salles
