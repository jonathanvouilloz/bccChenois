import React from "react"
import styles from './footer.module.css'
import {Link} from 'gatsby'
import links from '../../constants/links'
import socialIcons from '../../constants/icons'


const footer = () => {
  return (
      <footer class="content has-text-centered has-background-dark">
      <div class={styles.linksDiv} >
          {links.map((item, index) => {
            return (
                <li key={index} class={styles.footerLinks}>
                  <Link activeStyle={{color: '#35B0F6'}} to={item.path}>{item.name}</Link>
                </li>
            )
          })}
          <div className={styles.navSocialLinks}>
          {socialIcons.map((item, index) => {
            return (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            )
          })}
          </div>
        </div>
      </footer>
  )
}

export default footer
