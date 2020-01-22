import React from "react"
import TitleStyled from "../../styledComponents/titleStyled"
import { graphql, useStaticQuery } from "gatsby"
import BlogListComponent from "../../blog/blogListComponent"
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
        }
      }
    }
  }
`

const LastArticles = () => {
  const { allPosts } = useStaticQuery(getPostsAndResult)

  return (
    <div className="container is-fluid">
      <div className="container is-centered">
        <div className="container">
          <div className="has-text-centered">
            <TitleStyled subtitle="news" title="Dernieres" primary />
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
            <br />            <br />

          </main>
        </div>
      </div>
    </div>
  )
}

export default LastArticles
