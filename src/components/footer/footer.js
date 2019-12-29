import React from "react"
import styles from './footer.module.css'
import {Link} from 'gatsby'
import links from '../../constants/links'
import socialIcons from '../../constants/icons'
import logo from '../../images/logo.png'



const footer = () => {
  return (
      <footer class=" footer has-text-centered has-background-dark">
        <div class="columns is-mobile">
            <div class="column has-text-left container is-fluid">
            <ul class={styles.liste}>
            {links.map((item, index) => {
              
            return (
                <li key={index} class={styles.footerLinks}>
                  <Link activeStyle={{color: '#35B0F6'}} to={item.path}>{item.name}</Link>
                </li>
            )
            
          })}</ul>
          
            </div>
            <div class="column container is-hidden-mobile">
     
        <img class={styles.logo} src={logo} alt="bc-chenois-logo" />
            </div>
            <div class="column has-text-right">
    

              
            {socialIcons.map((item, index) => {
            return (
              <a
              class={styles.socialIcons}
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            )
          })}<br />
              <span class={styles.contact}>Contact</span><br />
                <span class={styles.infoContact}>022.345.34.23</span><br />
                <span class={styles.infoContact}>bcchenois@gmail.com</span><br />
                <span class={styles.infoContact}>45 rue des américains, Israel</span>
        
            
            </div>
          
        </div>
        <span class={styles.infoContact}>
        &copy; 2019 BCC
        </span>
     
      </footer>
  )
}

export default footer
