import React from "react"
import Layout from "../components/layout/layout"
import CoursJunior from "../components/informations/cours/coursJunior"
import Divider from "../components/styledComponents/dividerV2"
import CoursAdule from "../components/informations/cours/coursAdulte"
import Inscription from "../components/informations/formulaire/formulaireInscription"
import SEO from "../components/seo/seo"

const JoinUs = () => {
  return (

    <Layout>
      <SEO
        titleD="Inscription"
        descriptionD="Vous souhaitez vous inscrire, inscrire votre enfant ou venir faire une séance d'essai ?
         Vous êtes au bon endroit. Retrouvez ici toute nos séance d'entraînements et cours pour les juniors ainsi que pour les adultes et seniors."
      />   
      <Inscription />
    </Layout>
  )
}

export default JoinUs
