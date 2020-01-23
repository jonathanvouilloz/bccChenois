import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import ResultatDetail from "../components/resultats/resultatsDetail"
import TitleSection from "../components/styledComponents/titleStyled"




const Saison = ({ data }) => {
const {results} = data;
console.log(results);
   
  return (
    <Layout>
      <div className="container has-text-centered">
      <TitleSection primary title="Saison" subtitle={results.edges[0].node.saison} />
      {results.edges.map(({ node }) => {
        return <ResultatDetail interclub={node} key={node.id} />
      })}
      </div>
    </Layout>
  )
}

export const query = graphql`
query MyQuery($saison:Date) {
    results:allContentfulResultats(filter: {saison: {eq: $saison}}, sort: {order: DESC, fields: date}) {
        edges {
            node {
              title
              saison
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


export default Saison
