import React, { useState } from "react"
import styles from "./header.module.css"
import links from "../../constants/links"
import logo from "../../images/logo.png"
import { AiOutlineMenu } from "react-icons/ai"
import socialIcons from "../../constants/icons"
import {Link} from "gatsby"

const Header = () => {
  const [isOpen, setNav] = useState("")
  const toggleNav = () => {
    if(isOpen==="is-active"){
      setNav(isOpen => "")
      return
    }
    setNav(isOpen => "is-active")
  }

  return (
    <nav class="navbar is-spaced" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <Link className="navbar-item" fade to="/">
            <img className={styles.logoFix} src={logo} alt="bc-chenois-logo" />
          </Link>
      
          <a onClick={toggleNav} role="button" class={`navbar-burger burger ${isOpen}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      
        <div id="navbarBasicExample" class={`navbar-menu ${isOpen}`}>
          <div class="navbar-start" style={{flexGrow:1,justifyContent:'center',}}>
          <Link className={`navbar-item ${styles.testA}`} activeStyle={{color:"#35B0F6"}} fade to="/">
              Accueil
            </Link>
            <Link className={`navbar-item ${styles.testA}`} activeStyle={{color:"#35B0F6"}} fade to="/news">
              Articles
            </Link>
            <Link className={`navbar-item ${styles.testA}`} activeStyle={{color:"#35B0F6"}} fade to="/interclub">
              Interclub
            </Link>
            <Link className={`navbar-item ${styles.testA}`} activeStyle={{color:"#35B0F6"}} fade to="/inscription">
              Nous rejoindre
            </Link>
      
            <div class="navbar-item has-dropdown is-hoverable">
         
            <Link className={`navbar-item ${styles.testA}`} activeStyle={{color:"#35B0F6"}} fade to="/informations">
              A propos
            </Link>
      
              <div class="navbar-dropdown">
                <Link className={`navbar-item ${styles.testB}`} activeStyle={{textDecoration:"underline"}} fade to="/horaires">
                  Horaires
                </Link>
                <Link className={`navbar-item ${styles.testB}`} activeStyle={{textDecoration:"underline"}} fade to="/tarifs">
                  Tarifs
                </Link>
              </div>
            </div>
          </div>
      
          <div class="navbar-end">
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
        </div>
      </nav>
  )
}

export default Header
