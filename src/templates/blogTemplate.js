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

        return (
          <div>
            {node.data.target.fields.file["en-US"].contentType ===
            "application/pdf" ? (
              <a
                target="_blank" rel="noopener noreferrer"
                href={node.data.target.fields.file["en-US"].url}
              >
                {node.data.target.fields.title["en-US"]}
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
      <div className="container has-text-centered">
        <article className="container is-fluid has-text-left column is-two-thirds">
        <TitleStyled title={title} primary />
          <div className="columns is-mobile">
            <span className="is-italic column">
              Par <strong>{auteur}</strong>
            </span>
            <span className="is-italic column has-text-right">{publishedDate}</span>
          </div>
          <div className={styles.delimiter} />

          <content className={styles.content}>{documentToReactComponents(json, options)}</content>
          <br />
          <div className={styles.delimiter} />
          <br />

          <div className="has-text-left">
            <Link className={styles.retour} to="/news">
             Retour aux news
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
