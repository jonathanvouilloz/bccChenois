import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import Interclub from "../components/interclub/interclub"

const interclub = () => {
  return <Layout>
                <SEO titleD="Interclub" descriptionD="Retrouvez tous les résultats des équipes Interclub du BC Chênois" />
                <Interclub />
  </Layout>
}

export default interclub
