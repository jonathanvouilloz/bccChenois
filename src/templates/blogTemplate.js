import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout/layout"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import TitleStyled from "../components/styledComponents/titleStyled"
import styles from "./blogTemplate.module.css"
import SEO from "../components/seo/seo"


const Blog = ({ data }) => {
  const {
    title,
    publishedDate,
    auteur,
    content: { json },
  } = data.post;

  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        console.log(node)

        return (
          <div>
            {node.data.target.fields.file["en-US"].contentType ===
            "application/pdf" ? (
              <a
                target="_blank"
                href={node.data.target.fields.file["en-US"].url}
              >
                Bonjour
              </a>
            ) : (
              <img
                alt={node.data.target.fields.title["en-US"]}
                src={node.data.target.fields.file["en-US"].url}
              />
            )}
          </div>
        )
      },
    },
  }
  return (
    <Layout>
      <SEO titleD={title} />
      <div class="container is-fluid has-text-centered">
        <TitleStyled title={title} primary />
        <article class="container is-fluid has-text-left column is-two-thirds">
          <div class={styles.delimiter} />
          <div class="columns is-mobile">
            <span class="is-italic column">
              Par <strong>{auteur}</strong>
            </span>
            <br />
            <span class="is-italic column has-text-right">{publishedDate}</span>
          </div>
          <content>{documentToReactComponents(json, options)}</content>
          <br />
          <div class="has-text-left">
            <Link to="./news">
              <button class="button is-primary is-outlined is-uppercase ">
                Retour aux actualités
              </button>
            </Link>
          </div>
          <br />
        </article>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query getPost($slug: String, $next:String) {
    post: contentfulBlogPost(slug: { eq: $slug }) {
      id
      slug
      publishedDate(formatString: "dddd DD MMMM YYYY", locale: "fr")
      auteur
      title
      content {
        json
      }
    }
    nextPost: contentfulBlogPost(slug: { eq: $next }) {
      id
      slug
    }
  }
`

export default Blog
