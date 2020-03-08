import React from "react"
import styles from "./team.module.css"
import img from "../../../images/adrien-ourny.png"
import { FaHandPointRight } from "react-icons/fa"

const membreBox = ({ role, name, sentence }) => {
  return (
    <div className="column is-half has-text-centered">
      <div className="container columns is-fluid">
        <div className="container is-centered has-text-centered column is-two-fifths">
          <figure className="container image is-128x128">
            <img className={styles.avatar} src={img} alt={name} />
          </figure>
          <div className="has-text-left  is-hidden-desktop ">
            <span className={styles.infoMembre}>022334342</span>
            <br />
            <span className={styles.infoMembre}>
              dsunsdsdsadsdsdf@gmail.com
            </span>
          </div>
          <div className="has-text-centered  is-hidden-mobile ">
            <div className="dropdown is-hoverable">
              <div className="dropdown-trigger">
                <span>
                  <FaHandPointRight /> Contact
                </span>
              </div>
              <div className="dropdown-menu">
                <div className="dropdown-content">
                  <div className="dropdown-item has-text-left">
                    <p>
                      <strong>{name}</strong>
                    </p>
                    <span className={styles.infoMembre}>022334342</span>
                    <br />
                    <span className={styles.infoMembre}>
                      dsunsdsdsadsdsdf@gmail.com
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />

        <div className="column has-text-left">
          <h1 className="has-text-weight-bold is-uppercase has-text-left">
            <span className={styles.underline}>{role}</span>
          </h1>
          <br />
          <p>{sentence}</p>
          <p className={styles.signature}>- {name}</p>
          <br />
        </div>
      </div>
    </div>
  )
}

export default membreBox
