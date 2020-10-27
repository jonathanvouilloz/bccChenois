import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styles from "./resultats.module.css"
import ResultatDetail from "./resultatsDetail"

const getResultat = graphql`
  query {
    data: allContentfulResultats(sort: {order: DESC, fields: date}) {
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



const Resultats = () => {
  
  const { data } = useStaticQuery(getResultat)
  return (
    <div className="container">
      {data.edges.map(({ node }) => {
        return <ResultatDetail interclub={node} key={node.id} />
      })}
  
      <br />
    </div>
  )
}

export default Resultats
