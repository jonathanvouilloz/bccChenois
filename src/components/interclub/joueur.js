import React from 'react'
import Image from 'gatsby-image'
import styles from "./joueur.module.css"
import Logo from "../../images/logo.png"


const Joueur = ({joueur, id}) => {
    return (
        <div class="column is-3 has-text-centered container">
         <div class={styles.card}>
          <div class={styles.bandeau} />
          <img class={styles.logoCard} src={Logo} width="80px" />

          <div class={styles.avatar}>
          <figure class="container image 256x256">
            <Image fixed={joueur.picture.fixed} />
          </figure>   
          </div>
           <p class={styles.both}><span class={styles.nom}>{joueur.nom} </span><br /><span class={styles.prenom}>{joueur.prenom} </span>
           <br /><br /><span class={styles.ligue}>Ligue 3</span>

           </p>
         </div>


      </div>
    )
}


export default Joueur