import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout/layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import TitleStyled from '../components/styledComponents/titleStyled'


const Blog = ({data}) => {
    const {title, publishedDate, auteur,content:{json}} = data.post;
  
    const options = {
      renderNode:{
        "embedded-asset-block":node=>{
          console.log(node);
          
            return <div>
              {node.data.target.fields.file['en-US'].contentType === "application/pdf" 
              ? 
              <a href={node.data.target.fields.file['en-US'].url}>Bonjour</a> 
              : 
              <img alt={node.data.target.fields.title['en-US']} src={node.data.target.fields.file['en-US'].url}/>
            }
            </div>
        }
      }
    }
    return (
        <Layout>
            <div class="container is-fluid has-text-centered">
              <TitleStyled title={title} primary />
              <article class="container is-fluid has-text-left">
              {documentToReactComponents(json,options)}
              </article>
            </div>
        </Layout>
    )
}


export const query = graphql`
query getPost($slug:String) {
    post:contentfulBlogPost(slug: {eq: $slug}) {
      id
      slug
      publishedDate(formatString:"dddd DD MMMM YYYY", locale:"fr")
      auteur
      title
      content {
        json
      }
    }
  }
`

export default Blog