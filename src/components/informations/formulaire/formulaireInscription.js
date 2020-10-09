import React from "react"
import TitleSection from "../../styledComponents/titleStyled"
import Divider from "../../styledComponents/divider"
import { useStaticQuery, graphql } from "gatsby"
import styles from "./formulaire.module.css"

const FormulaireInscription = () => {
  const data = useStaticQuery(graphql`
    query {
      pdfInscription: file(
        sourceInstanceName: { eq: "documents" }
        relativePath: { eq: "inscription_saison_2019_2020.pdf" }
      ) {
        publicURL
      }
    }
  `)

  return (
    <div>
      <div className="container has-text-centered">
        <div className="container is-fluid">
          <TitleSection title="Inscription" subtitle="en ligne" primary />
        </div>
        <div className={styles.mainForm}>
          <section className="container is-fluid has-text-left">
            <p>
              <a
                href={data.pdfInscription.publicURL}
                rel="noopener noreferrer"
                target="_blank"
              >
                {" "}
                Télécharge le formulaire d'inscription et apporte le nous
                directement
              </a>
            </p>
            <p className="has-text-weight-bold">Ou</p>
            <p>
              Remplis le formulaire directement ici <span role="img">⬇️</span>
            </p>
            <div>__________________</div>
            <br />
            <form
              method="POST"
              action="https://formspree.io/jojo-acdc@hotmail.com"
            >
              <div className="field">
                <label className="label">Civilité</label>
                <div className="control">
                  <label name="Civilité" className={styles.radioLabel}>
                    <input
                      type="radio"
                      value="M."
                      name="Civilité"
                      className={styles.radio}
                    />
                    M.
                  </label>
                  <label name="Civilité" className={styles.radioLabel}>
                    <input
                      type="radio"
                      value="Mme"
                      name="Civilité"
                      className={styles.radio}
                    />
                    Mme
                  </label>
                </div>
              </div>
              <div className="field is-horizontal">
                <div className="field-body">
                  <div className="field">
                    <label name="Nom" className="label">
                      Nom
                    </label>
                    <p className=" is-expanded">
                      <input
                        required
                        className="input"
                        name="Nom"
                        type="text"
                        placeholder="Nom"
                      />
                    </p>
                  </div>

                  <div className="field">
                    <label name="Prénom" className="label">
                      Prénom
                    </label>
                    <p className="control is-expanded">
                      <input
                        required
                        className="input"
                        name="Prénom"
                        type="text"
                        placeholder="Prénom"
                      />
                    </p>
                  </div>

                  <div className="field">
                    <label name="Date de naissance" className="label">
                      Date de naissance
                    </label>
                    <p className="control is-expanded">
                      <input
                        required
                        className="input"
                        name="Date de naissance"
                        type="date"
                      />
                    </p>
                  </div>
                </div>
              </div>
              {/* delimiter */}
              <div className="field is-horizontal">
                <div className="field-body">
                  <div className="field">
                    <label name="Adresse 1" className="label">
                      Adresse 1
                    </label>
                    <p className="control">
                      <input
                        required
                        className="input"
                        name="Adresse 1"
                        type="text"
                        placeholder="Adresse 1"
                      />
                    </p>

                    <div className="field">
                      {" "}
                      <label name="Adresse 2" className="label">
                        Adresse 2
                      </label>
                      <p className="control is-expanded">
                        <input
                          className="input"
                          name="Adresse 2"
                          type="text"
                          placeholder="Adresse 2"
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* delimiter */}
              <div className="field is-horizontal">
                <div className="field-body">
                  <div className="field">
                    <label name="Localité" className="label">
                      Localité
                    </label>
                    <p className="control is-expanded">
                      <input
                        required
                        className="input"
                        type="text"
                        name="Localité"
                      />
                    </p>
                  </div>
                  <div className="field">
                    <label name="NPA" className="label">
                      NPA
                    </label>
                    <p className="control is-expanded">
                      <input
                        required
                        className="input"
                        type="text"
                        name="NPA"
                      />
                    </p>
                  </div>
                  <div className="field">
                    <label name="Nationalité" className="label">
                      Nationalité
                      <span>
                        <sup> 1</sup>
                      </span>
                    </label>
                    <p className="control is-expanded">
                      <input
                        required
                        className="input"
                        type="text"
                        name="Nationalité"
                      />
                    </p>
                  </div>

                  <div className="field">
                    <label name="Pays" className="label">
                      Pays
                    </label>
                    <p className="control">
                      <p className="select">
                        <select name="Pays">
                          <option>Suisse</option>
                          <option>France</option>
                        </select>
                      </p>
                    </p>
                  </div>
                </div>
              </div>
              {/* delimiter */}
              <div className="field is-horizontal">
                <div className="field-body">
                  <div className="field">
                    <label name="Adresse mail" className="label">
                      Adresse mail
                    </label>
                    <p className="control is-expanded">
                      <input
                        required
                        className="input"
                        name="Adresse mail"
                        type="email"
                      />
                    </p>
                  </div>
                  <div className="field">
                    <label name="Téléphone fixe" className="label">
                      N° Téléphone maison
                    </label>
                    <p className="control is-expanded">
                      <input
                        required
                        className="input"
                        name="Téléphone fixe"
                        type="tel"
                      />
                    </p>
                  </div>
                  <div className="field">
                    <label name="Téléphone portable" className="label">
                      N° Téléphone portable
                    </label>
                    <p className="control is-expanded">
                      <input
                        required
                        className="input"
                        name="Téléphone portable"
                        type="tel"
                      />
                    </p>
                  </div>
                </div>
              </div>
              <Divider /> {/* delimiter */}
              <div className="field columns">
                <div className="column">
                  <h3>Cotisation Badminton Club Chênois</h3>
                  <br />
                  <div className="column">
                    <label name="CotisationClub" className="label">
                      <input
                        type="checkbox"
                        name="CotisationClub"
                        value="admission Club / 50.-"
                        className={styles.radio}
                      />
                      Admission au club<sup> 2 </sup>
                    </label>
                    <span>50.- CHF</span>
                  </div>
                  <div className="column">
                    <label name="CotisationClub" className="label">
                      <input
                        type="checkbox"
                        name="CotisationClub"
                        value="Cotisation / 170.-"
                        className={styles.radio}
                      />
                      Cotisation enfants / adultes
                    </label>
                    <span>170.- CHF</span>
                  </div>
                </div>

                <div className="column">
                  <h3>Cotisation Swiss Badminton</h3>
                  <br />
                  <div className="column">
                    <label name="cotisationSwissBad" className="label">
                      <input
                        type="radio"
                        name="cotisationSwissBad"
                        value="Licence Junior 2006 ou plus tard / 20.-"
                        className={styles.radio}
                      />
                      Licence Junior nés en 2006 ou plus tard<sup> 3 </sup>
                    </label>
                    <span>20.- CHF</span>
                  </div>
                  <div className="column">
                    <label name="cotisationSwissBad" className="label">
                      <input
                        type="radio"
                        name="cotisationSwissBad"
                        value="Licence Junior 2002 - 2005 / 40.-"
                        className={styles.radio}
                      />
                      Licence Junior nés entre 2002 et 2005
                      <sup> 3 </sup>
                    </label>
                    <span>40.- CHF</span>
                  </div>
                  <div className="column">
                    <label name="AdulteLicence" className="label">
                      <input
                        type="radio"
                        name="cotisationSwissBad"
                        value="Licence Adulte / 120.-"
                        className={styles.radio}
                      />
                      Licence adulte (né avant 2002)
                      <sup> 4 </sup>
                    </label>
                    <span>120.- CHF</span>
                  </div>
                  <div className="column">
                    <label name="cotisationSwissBad" className="label">
                      <input
                        type="checkbox"
                        name="cotisationSwissBad"
                        value="Cotisation membre actif / 30.-"
                        className={styles.radio}
                      />
                      Cotisation membre adulte actif<sup> 5 </sup>
                    </label>
                    <span>30.- CHF</span>
                  </div>
                </div>
              </div>
              <Divider /> {/* delimiter */}
              <div className="field is-horizontal">
                <div className="field-body">
                  <div className="field">
                    <label name="Date du jour" className="label">
                      Date du jour
                    </label>
                    <p className="control is-expanded">
                      <input
                        required
                        className="input"
                        type="date"
                        name="Date du jour"
                      />
                    </p>
                  </div>
                  <div className="field">
                    <label name="Signature" className="label">
                      Signature{" "}
                      <span className="is-size-7">
                        (Pour les mineurs, signature du représentant légal)
                      </span>
                    </label>
                    <p className="control is-expanded">
                      <input
                        required
                        className="input"
                        type="text"
                        name="Signature"
                      />
                    </p>
                  </div>
                </div>
              </div>
              <p className="has-text-danger">
                *Merci de remplir tous les champs
              </p>
              <div className="container has-text-centered">
                <button className="button is-primary is-medium is-outlined is-uppercase">
                  Envoyer le formulaire
                </button>
              </div>
              <br />
              <div>
              <span>
                  <sup>1 </sup>: Montant unique perçu lors de la première année d'adhésion.
                </span>
                <br />
                <span>
                  <sup>2 </sup>: Montant perçu chaque année d'adhésion.
                </span>
                <br />
                <span>
                  <sup>3 </sup>: Montant obligatoire perçu chaque année d'ahésion et reversé à la fédération
                  Swiss Badminton.
                </span>
                <br />
                <span>
                  <sup>4 </sup>: Montant facultatif perçu aux adultes souhaitant faire de la compétition.
                </span>
                <br />
                <span>
                  <sup>5 </sup>: Montant facultatif reversé à la Fédération Swiss Badminton.
                </span>
                <br />
                <br />
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  )
}

export default FormulaireInscription
