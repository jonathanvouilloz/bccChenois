import React from "react"
import styles from "./lastArticles.module.css"
import TitleStyled from "../../styledComponents/titleStyled"
import { graphql, useStaticQuery } from "gatsby"
import BlogListComponent from "../../blog/blogListComponent"
import LastResult from "../../resultats/resultatsDetail"
import Divider from "../../styledComponents/divider"
import {Link} from 'gatsby'

const getPostsAndResult = graphql`
  query {
    allPosts: allContentfulBlogPost(
      sort: { fields: publishedDate, order: DESC }
      limit: 3
    ) {
      edges {
        node {
          title
          publishedDate(formatString: "dddd DD MMMM YYYY", locale: "fr")
          slug
          auteur
          id: contentful_id
          content {
            json
          }
        }
      }
    }
    data: allContentfulResultats(sort: {order: DESC, fields: date}, limit:3) {
        edges {
          node {
            title
            id: contentful_id
            resultats {
              json
            }
            match: childrenContentfulResultatsResJsonNode {
              j1
              j2
              j3
              j4
              match
              set1
              set2
              set3
              win
            }
          }
        }
      }
  }
`

const LastArticles = () => {
  const { allPosts, data } = useStaticQuery(getPostsAndResult)

  return (
    <div className="container is-fluid">
      <div className="container is-centered">
        <div className="container">
          <div className="has-text-centered">
            <TitleStyled subtitle="articles" title="Derniers" primary />
          </div>
          <main>
            <br />
            <div className="container columns is-multiline">
              {allPosts.edges.map(({ node }) => {
                return (
                  <BlogListComponent section="home" key={node.id} post={node} />
                )
              })}
            </div>
            <div className="container is-centered has-text-centered">
              <Link to="./news">
              <button className="button is-primary is-medium is-outlined is-uppercase">
                Voir tous les articles
              </button>
              </Link>
            </div>
            <br />
          </main>
        </div>
<Divider />
        <div className="container">
          <div className="has-text-centered">
            <TitleStyled subtitle="interclub" title="Derniers" />
          </div>
          <main className="container is-centered has-text-centered">
          {data.edges.map(({ node }) => {
        return <LastResult section="home" interclub={node} key={node.id} />
      })}
            <Link to="interclub#resultats">
              <button className="button is-primary is-medium is-outlined is-uppercase">
                Voir tous les résultats
              </button><br /><br /><br />
              </Link>
          </main>
        </div>
      </div>
    </div>
  )
}

export default LastArticles
