import React, {useState} from 'react'
import styles from './header.module.css'
import links from '../../constants/links'
import logo from '../../images/logo.png'
import { AiOutlineMenu } from "react-icons/ai"
import socialIcons from '../../constants/icons'
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Header = () => {
    const [isOpen, setNav] = useState(false);
    const toggleNav = () => {
      setNav(isOpen => !isOpen)
    }
    console.log(isOpen);
    

    return (
      <nav className="has-background-dark">
      <div className={styles.navCenter}>
      <div className={styles.navHeader}>
          <AniLink fade to="./">
          <img class={styles.logoFix} src={logo} alt="bcc-chenois-logo" />
          </AniLink>
          <button type="button" className={styles.logoBtn} onClick={toggleNav}>
            <AiOutlineMenu className={styles.logoIcon} />
          </button>
        </div>
        <div className={styles.navMiddle}>  <ul
          className={
            isOpen
              ? `${styles.navLinks} ${styles.showNav}`
              : `${styles.navLinks}`
          }
        >
          {links.map((item, index) => {
            return (
              <li key={index}>
                <AniLink class={styles.underline} activeStyle={{color: '#35B0F6'}} fade to={item.path}>{item.name}</AniLink>
              </li>
            )
          })}
        </ul></div>
      
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
    </nav>
    )
}

export default Header