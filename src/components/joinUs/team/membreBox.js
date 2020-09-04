import React from "react"
import styles from "./team.module.css"
import Image from 'gatsby-image'
import { graphql, useStaticQuery } from "gatsby"



const MembreBox = ({ role, name, sentence, contact, image }) => {

  const data = useStaticQuery(graphql`
  query  {
    files: allFile(filter: {relativeDirectory: {eq: "team"}}) {
      edges {
        node {
          relativePath
          relativeDirectory
          childImageSharp {
            fixed(width:200, quality:70, height:200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
  `)  
  
  let imgF;
  const dat = data.files.edges;
  const found = dat.find(node => node.node.relativePath === image);
  if(found !== undefined){
    imgF = found.node.childImageSharp.fixed;
  }
  

  return (
    <div className="column is-6">
      <div className="container columns is-fluid">
        <div className="container has-text-left column is-two-third has-text-centered-mobile">
              <Image fixed={imgF} />
        </div>
        <div className="column has-text-left has-text-centered-mobile">
          <h1 className="has-text-weight-bold is-uppercase">
            <span className={styles.underline}>{role}</span>
          </h1>
          <br />
          <span>{name}</span><br />
          <span><strong>Contact:</strong> {contact}</span>
          <p>{sentence}</p>
          <br />
        </div>
      </div>
    </div>
  )
}

export default MembreBox
