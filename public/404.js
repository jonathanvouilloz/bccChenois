import React from "react"
import Layout from "../src/components/layout/layout"
import SEO from "../src/components/seo/seo"

const error = () => {



  return (
    <Layout>
      <SEO titleD="404"  />
        <Custom404 />
    </Layout>
  )
}

export default error
