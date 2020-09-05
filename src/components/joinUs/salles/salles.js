import React from "react"
import TitleSection from "../../styledComponents/titleStyled"
import Salle from "./salle"
import { useStaticQuery, graphql } from "gatsby"
import InfoSalles from "../../../constants/sallesInfos"

const Salles = () => {
  const data = useStaticQuery(graphql`
    query {
      marcelly: file(relativePath: { eq: "ecole-marcelly.PNG" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 70, maxHeight: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      candolle: file(relativePath: { eq: "college-candole.PNG" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 70, maxHeight: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bois: file(relativePath: { eq: "bois-arts.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 70, maxHeight: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div id="salles" className="container is-fluid has-text-centered">
      <TitleSection title="Nos salles" subtitle="à disposition" primary />
      <div className="columns">
        <Salle
          nom="Collège de Candolle"
          adresse="Collège de Candolle / Avenue A.-M.-Mirany 36 / 1225 Chêne-Bourg"
          img={data.candolle.childImageSharp.fluid}
          link={InfoSalles[2].link}
        />
        <Salle
          nom="École de Marcelly"
          adresse="Ecole de Marcelly / 10, chemin de Marcelly / 1226 Thônex"
          img={data.marcelly.childImageSharp.fluid}
          link={InfoSalles[0].link}
        />
        <Salle
          nom="Espace du Bois-des-Arts"
          adresse="Ecole du Bois-des-Arts / 62, chemin du Bois-des-Arts / 1226 Thônex"
          img={data.bois.childImageSharp.fluid}
          link={InfoSalles[1].link}
        />
      </div>
      <br />
    </div>
  )
}

export default Salles
