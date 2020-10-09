import React from "react"
import Layout from "../components/layout/layout"
import CoursJunior from "../components/informations/cours/coursJunior"
import Divider from "../components/styledComponents/dividerV2"
import CoursAdule from "../components/informations/cours/coursAdulte"
import SEO from "../components/seo/seo"

const infos = () => {
  return (
    <Layout>
         <SEO
        titleD="Horaires"
        descriptionD="Consulte les horaires de nos entrainements ainsi que les cours pour les juniors et viens faire un cours d'essai!"
      />
      <CoursJunior />
      <Divider />
      <CoursAdule />
    </Layout>
  )
}

export default infos
