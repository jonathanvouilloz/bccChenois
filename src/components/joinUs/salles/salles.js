import React from "react"
import TitleSection from "../../styledComponents/titleStyled"
import Salle from "./salle"
import SallesLink from "../../../constants/sallesInfos"
import Marcelly from "../../../images/marcelly.png"

const Salles = () => {
  return (
    <div className="container is-fluid has-text-centered">
      <TitleSection title="Nos salles" subtitle="à disposition" primary />
      <div class="columns">
      {SallesLink.map((item, index) => {
          console.log(item);
          
            return (
                <Salle nom={item.nom} adresse={item.adresse} imgMap={Marcelly} link={item.link} entrainement="" />

            )
          })}
 
      </div>
      <br />
    </div>
  )
}

export default Salles
