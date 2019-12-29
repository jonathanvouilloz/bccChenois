import React from "react"
import Layout from "../components/layout/layout"
import Posts from "../components/blog/posts"
import SEO from "../components/seo/seo"


const blog = () => {
  return <Layout>
                <SEO titleD="News" descriptionD="Retrouvez toute l'actualité du BC Chênois" />

    <Posts />
  </Layout>
}

export default blog
