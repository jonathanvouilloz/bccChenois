import React, { useState } from "react"
import styles from "./header.module.css"
import links from "../../constants/links"
import logo from "../../images/logo.png"
import { AiOutlineMenu } from "react-icons/ai"
import socialIcons from "../../constants/icons"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Header = () => {
  const [isOpen, setNav] = useState(false)
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (
    <nav className="has-background-dark">
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <AniLink fade to="./">
            <img className={styles.logoFix} src={logo} alt="bc-chenois-logo" />
          </AniLink>
          <button type="button" className={styles.logoBtn} onClick={toggleNav}>
            <AiOutlineMenu className={styles.logoIcon} />
          </button>
        </div>
        <ul className="is-hidden-mobile">

        <div className={styles.dropdown}>
          <span className={styles.dropText}><AniLink
                to="./"
                activeStyle={{ color: "#35B0F6" }}
              >
                Accueil
              </AniLink></span>
        </div>
        <div className={styles.dropdown}>
          <span className={styles.dropTextTitle}>Actualités</span>
          <div className={styles.dropdown_content}>
            <p className={styles.dropText}>
              <AniLink
                to="./news"
                fade
                activeStyle={{ color: "#35B0F6" }}
              >
                Articles
              </AniLink>
            </p>
            <p className={styles.dropText}>
              <AniLink
                to="./informations"
                activeStyle={{ color: "#35B0F6" }}
              >
                Interclub
              </AniLink>
            </p>
          </div>
        </div>
        <div className={styles.dropdown}>
          <span className={styles.dropText}><AniLink
                to="./inscription"
                activeStyle={{ color: "#35B0F6" }}
              >
                Rejoins-nous
              </AniLink></span>
        </div>
        <div className={styles.dropdown}>
          <span className={styles.dropText}><AniLink
                to="./informations"
                activeStyle={{ color: "#35B0F6" }}
              >
                Infos
              </AniLink></span>
        </div>
        </ul>



        <div className="is-hidden-tablet">
          {" "}
          <ul
            className={
              isOpen
                ? `${styles.navLinks} ${styles.showNav}`
                : `${styles.navLinks}`
            }
          >
            {links.map((item, index) => {
              return (
                <li key={index}>
                  <AniLink
                    className={styles.underline}
                    activeStyle={{ color: "#35B0F6" }}
                    fade
                    to={item.path}
                  >
                    {item.name}
                  </AniLink>
                </li>
              )
            })}
          </ul>
        </div>

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
