import React from "react"
import TitleSection from "../../styledComponents/titleStyled"
import Salle from "./salle"

const Salles = () => {
  return (
    <div className="container is-fluid has-text-centered">
      <TitleSection title="Nos salles" subtitle="à disposition" primary />
      <div class="columns">
    
                <Salle nom="henry 2" adresse="henry 3" entrainement="./joinUs" />
                <Salle nom="henry 2" adresse="henry 3" entrainement="./joinUs" />
                <Salle nom="henry" adresse="henry 3" entrainement="./joinUs" />

   
 
      </div>
      <br />
    </div>
  )
}

export default Salles
