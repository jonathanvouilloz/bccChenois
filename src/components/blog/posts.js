import React from "react"
import TitleSection from "../styledComponents/titleStyled"
import BlogListComponent from "./blogListComponent"
import {graphql, useStaticQuery} from "gatsby"


const getAllPost = graphql`
query {
    allPosts: allContentfulBlogPost(sort:{fields:publishedDate,order:DESC}) {
      edges {
        node {
          title
          publishedDate(formatString:"dddd DD MMMM YYYY", locale:"fr")
          slug
          auteur
          id:contentful_id
          content{
            json
          }
        }
      }
    }
  }
  
`

const Posts = () => {
    const {allPosts} = useStaticQuery(getAllPost);

  return (
    <div class="container has-text-centered">
      <TitleSection title="Les dernières" subtitle="news" />
      <section class="section">
      <div class="container columns is-multiline">
      {allPosts.edges.map(({node})=>{
                return <BlogListComponent key={node.id} post={node} />
            })}
    
          
        
        </div>
      </section>
    </div>
  )
}

export default Posts
