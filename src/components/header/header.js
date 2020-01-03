import React, { useState } from "react"
import styles from "./header.module.css"
import links from "../../constants/links"
import logo from "../../images/logo.png"
import { AiOutlineMenu } from "react-icons/ai"
import socialIcons from "../../constants/icons"
import {Link} from "gatsby"

const Header = () => {
  const [isOpen, setNav] = useState(false)
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (
    <nav className="has-background-dark">
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <Link fade to="./">
            <img className={styles.logoFix} src={logo} alt="bc-chenois-logo" />
          </Link>
          <button type="button" className={styles.logoBtn} onClick={toggleNav}>
            <AiOutlineMenu className={styles.logoIcon} />
          </button>
        </div>


        <div>
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
                  <Link
                    className={styles.underline}
                    activeStyle={{ color: "#35B0F6" }}
                    fade
                    to={item.path}
                  >
                    {item.name}
                  </Link>
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
