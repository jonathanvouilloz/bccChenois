import React from 'react'
import Image from 'gatsby-image'
import styles from "./joueur.module.css"
import Logo from "../../images/logo.png"


const Joueur = ({joueur, id}) => {
    return (
        <div class="column is-3 has-text-centered container">
         <div class={styles.card}>
          <div class={styles.bandeau} />
          <img alt="logo-bcc-chênois" class={styles.logoCard} src={Logo} width="80px" />

          <div class={styles.avatar}>
          <figure class="container image 256x256">
            <Image alt={joueur.prenom+'-'+joueur.nom} fixed={joueur.picture.fixed} />
          </figure>   
          </div>
           <p class={styles.both}><span class={styles.nom}>{joueur.nom} </span><br /><span class={styles.prenom}>{joueur.prenom} </span>
           <br /><br /><span class={styles.ligue}>4<sub>ème</sub> ligue</span>

           </p>
         </div>


      </div>
    )
}


export default Joueur