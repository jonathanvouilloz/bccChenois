import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import Custom404 from "../components/404/404"

const error = () => {
  return (
    <Layout>
      <SEO titleD="404"  />
      <Custom404 />
    </Layout>
  )
}

export default error
