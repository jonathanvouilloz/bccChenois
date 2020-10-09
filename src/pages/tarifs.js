import React from "react"
import Layout from "../components/layout/layout"
import Tarifs from "../components/informations/tarifs/tarif"
import Divider from "../components/styledComponents/dividerV2"
import SEO from "../components/seo/seo"

const tarifs = () => {
  return (
    <Layout>
        <SEO
        titleD="Tarifs"
        descriptionD="Consulte les tarifs, la cotisation ainsi que les infos concernant les interclubs!"
      />
      <Tarifs />
    </Layout>
  )
}

export default tarifs
