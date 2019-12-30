import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import styles from "./resultats.module.css"
import ResultatDetail from "./resultatsDetail"


const getResultat = graphql`
 query{
data: allContentfulResultats {
    edges {
      node {
        title
        resultats
        {
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

   
    const {data} = useStaticQuery(getResultat);
 
      
    return (

        <div class="container is-fluid">
            <br />
               {data.edges.map(({node})=>{
           return <ResultatDetail interclub={node} key={node.title} />
            })}
              
        </div>
    )
}

export default Resultats
