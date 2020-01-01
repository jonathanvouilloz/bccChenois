import React from "react"
import styles from './footer.module.css'
import {Link} from 'gatsby'
import links from '../../constants/links'
import socialIcons from '../../constants/icons'
import logo from '../../images/logo.png'



const footer = () => {
  return (
      <footer className=" footer has-text-centered has-background-dark">
        <div className="columns is-mobile">
            <div className="column has-text-left container">
            <ul className={styles.liste}>
            {links.map((item, index) => {
              
            return (
                <li key={index} className={styles.footerLinks}>
                  <Link activeStyle={{color: '#35B0F6'}} to={item.path}>{item.name}</Link>
                </li>
            )
            
          })}</ul>
          
            </div>
            <div className="column container is-hidden-mobile">
     
        <img className={styles.logo} src={logo} alt="bc-chenois-logo" />
            </div>
            <div className="column has-text-right">
    

              
            {socialIcons.map((item, index) => {
            return (
              <a
              className={styles.socialIcons}
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            )
          })}<br />
              <span className={styles.contact}>Contact</span><br />
                <span className={styles.infoContact}>022.345.34.23</span><br />
                <span className={styles.infoContact}>bcchenois@gmail.com</span><br />
                <span className={styles.infoContact}>Badminton Club Chênois
Case postale 135
1226 Thônex</span>
        
            
            </div>
          
        </div>

        <span className={styles.infoContact}>
        &copy; 2019 BCC - Réalisé par Jonathan Vouilloz
        </span>
     
      </footer>
  )
}

export default footer
