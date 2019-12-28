import React from "react"
import styles from "./team.module.css"
import img from "../../../images/avatar.jpg"
import { FaHandPointRight } from "react-icons/fa"

const membreBox = ({ role, name, sentence }) => {
  return (
    <div className="column is-half has-text-centered">
      <div className="container columns is-fluid">
        <div
          class="container is-centered has-text-centered column is-two-fifths">
          <figure class="container image is-128x128">
            <img class={styles.avatar} src={img} alt={name} />
          </figure>
          <div class="has-text-left  is-hidden-desktop ">
          <span class={styles.infoMembre}>022334342</span>
                    <br />
                    <span class={styles.infoMembre}>
                      dsunsdsdsadsdsdf@gmail.com
                    </span>
          </div>
          <div class="has-text-centered  is-hidden-mobile ">
            <div class="dropdown is-hoverable">
              <div class="dropdown-trigger">
                <span>
                  <FaHandPointRight /> Contact
                </span>
              </div>
              <div class="dropdown-menu" role="info">
                <div class="dropdown-content">
                  <div class="dropdown-item has-text-left">
                    <p>
                      <strong>{name}</strong>
                    </p>
                    <span class={styles.infoMembre}>022334342</span>
                    <br />
                    <span class={styles.infoMembre}>
                      dsunsdsdsadsdsdf@gmail.com
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />

        <div class="column has-text-left">
          <h1 class="has-text-weight-bold is-uppercase has-text-left">
            <span class={styles.underline}>{role}</span>
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
