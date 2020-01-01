import React from "react"
import Divider from "../styledComponents/divider"
import TitleSection from "../styledComponents/titleStyled"
import Joueur from "./joueur"
import {graphql, useStaticQuery} from 'gatsby'


const getJoueurs = graphql`
query {
    joueurs:allContentfulJoueur {
      edges {
        node {
          nom
          numEquipe
          prenom
          contentful_id
          picture {
            fixed(width:256, height:160) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
  
`

const Equipe = () => {
    
   const {joueurs} = useStaticQuery(getJoueurs);
    
  return (
    <div className="container">
      <Divider />
      <TitleSection title="Notre" subtitle="equipe" /><br />
      <div class="container columns is-multiline">
       {joueurs.edges.map(({node})=>{ 
          return (
          <Joueur joueur={node} key={node.id} /> )
        })}
      </div>
      <Divider />
    </div>
  )
}


export default Equipe
