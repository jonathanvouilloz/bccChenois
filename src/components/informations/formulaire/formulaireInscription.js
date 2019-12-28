import React from "react"
import TitleSection from "../../styledComponents/titleStyled"
import Divider from "../../styledComponents/divider"
import { useStaticQuery, graphql } from "gatsby"
import styles from "./formulaire.module.css"


const FormulaireInscription = () => {

  const data = useStaticQuery(graphql`
  query {
    pdfInscription :file(sourceInstanceName: {eq: "documents"}, relativePath: {eq: "inscription_saison_2019_2020.pdf"}) {
      publicURL
    }
  }

`)

  return (
    <div>
      <div class="container has-text-centered">
        <div class="container is-fluid">
        
        <TitleSection title="Inscription" subtitle="en ligne" primary /></div>
        <div class={styles.mainForm}>
          
          <section class="container is-fluid has-text-left">
          <p>
        <a href={data.pdfInscription.publicURL} target="_blank"> Télécharge le formulaire d'inscription et apporte le nous directement</a>
        </p>
        <p class="has-text-weight-bold">Ou</p>
        <p role="dl">Remplis le formulaire directement ici ⬇️</p>
        <div>__________________</div><br />
            <form rel="noopener noreferrer" method="POST" action="https://formspree.io/jojo-acdc@hotmail.com">
            <div class="field">
              <label class="label">Civilité</label>
              <div class="control">
                <label class={styles.radioLabel}>
                  <input type="radio" value="M." name="Civilité" class={styles.radio} />
                  M.
                </label>
                <label class={styles.radioLabel}>
                  <input type="radio" value="Mme" name="Civilité" class={styles.radio} />
                  Mme
                </label>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-body">
                <div class="field">
                  <label class="label">Nom</label>
                  <p class=" is-expanded">
                    <input class="input" name="Nom" type="text" placeholder="Nom" />
                  </p>
                </div>

                <div class="field">
                  <label class="label">Prénom</label>
                  <p class="control is-expanded">
                    <input class="input" name="Prénom" type="text" placeholder="Prénom" />
                  </p>
                </div>

                <div class="field">
                  <label class="label">Date de naissance</label>
                  <p class="control is-expanded">
                    <input class="input" name="Date de naissance" type="date" />
                  </p>
                </div>
              </div>
            </div>
            {/* delimiter */}
            <div class="field is-horizontal">
              <div class="field-body">
                <div class="field">
                  <label class="label">Adresse 1</label>
                  <p class="control">
                    <input class="input" name="Adresse 1" type="text" placeholder="Adresse 1" />
                  </p>

                  <div class="field">
                    {" "}
                    <label class="label">Adresse 2</label>
                    <p class="control is-expanded">
                      <input
                        class="input"
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
            <div class="field is-horizontal">
              <div class="field-body">
                <div class="field">
                  <label class="label">Localité</label>
                  <p class="control is-expanded">
                    <input class="input" type="text" name="Localité" />
                  </p>
                </div>
                <div class="field">
                  <label class="label">NPA</label>
                  <p class="control is-expanded">
                    <input class="input" type="text" name="NPA" />
                  </p>
                </div>
                <div class="field">
                  <label class="label">
                    Nationalité<sup>1</sup>
                  </label>
                  <p class="control is-expanded">
                    <input class="input" type="text" name="Nationalité" />
                  </p>
                </div>

                <div class="field">
                  <label class="label">Pays</label>
                  <p class="control">
                    <div class="select">
                      <select name="Pays">
                        <option>Suisse</option>
                        <option>France</option>
                      </select>
                    </div>
                  </p>
                </div>
              </div>
            </div>
            {/* delimiter */}
            <div class="field is-horizontal">
              <div class="field-body">
                <div class="field">
                  <label class="label">Adresse mail</label>
                  <p class="control is-expanded">
                    <input class="input" name="Adresse mail" type="email" />
                  </p>
                </div>
                <div class="field">
                  <label class="label">N° Téléphone maison</label>
                  <p class="control is-expanded">
                    <input class="input" name="Téléphone fixe" type="tel" />
                  </p>
                </div>
                <div class="field">
                  <label class="label">N° Téléphone portable</label>
                  <p class="control is-expanded">
                    <input class="input" name="Téléphone portable" type="tel" />
                  </p>
                </div>
              </div>
            </div>
            <Divider /> {/* delimiter */}
            <div class="field">
              <h3>Cotisation Badminton Club Chênois</h3>
              <br />
              <div class="content">
                <table class="table is-striped">
                  <thead>
                    <td>
                      <label class="label">
                        <input
                          type="checkbox"
                          name="CotisationClub"
                          value="Cotisation Club / 50.-"
                          class={styles.radio}
                        />
                        Admission au club<sup> 2 </sup>
                      </label>
                    </td>
                    <td>
                      <span>50.- CHF</span>
                    </td>
                  </thead>
                  <thead>
                      <td>
                      <label class="label">
                  <input type="checkbox" value="Enfants / 170.-" name="CotisationClub" class={styles.radio} />
                  Cotisation enfants
                  
                </label>
                      </td>
                      <td width="150">
                      <span >170.- CHF</span>
                      </td>
                  </thead>
                  <thead>
                      <td>
                      <label class="label">
                  <input type="checkbox" value="Adultes / 170.-" name="CotisationClub" class={styles.radio} />
                  Cotisation adultes
                </label>
                      </td>
                      <td>
                      <span >170.- CHF</span>

                      </td>
                  </thead>
                </table>

               
               
              </div>
            </div>
            <Divider /> {/* delimiter */}



            <div class="field">
              <h3>Cotisation Swiss Badminton</h3>
              <br />
              <div class="content container">
                <table class="table is-striped">
                  <thead>
                    <td>
                      <label class="label">
                        <input
                          type="radio"
                          value="Juniors 2004 et plus / 20.-"
                          name="CotisationSwissBadminton"
                          class={styles.radio}
                        />
                        Juniors nés en 2004 et après (U12-U15)<sup>3</sup>
                      </label>
                    </td>
                    <td width="150">
                      <span >20.- CHF</span>
                    </td>
                  </thead>
                  <thead>
                    <td>
                      <label class="label">
                        <input
                          type="radio"
                          name="CotisationSwissBadminton"
                          value="Juniors 2000 - 2003 / 40.-"
                          class={styles.radio}
                        />
                        Juniors nés entre 2000 jusqu'en 2003 (U16-U19)
                        <sup> 3</sup>
                      </label>
                    </td>
                    <td>
                      <span >40.- CHF</span>
                    </td>
                  </thead>

                  <thead>
                    <td>
                      <label class="label">
                        <input
                          type="radio"
                          name="CotisationSwissBadminton"
                          value="Membre actif / 30.-"
                          class={styles.radio}
                        />
                        Cotisation membre adulte actif<sup> 4</sup>
                      </label>
                    </td>
                    <td>
                      <span >30.- CHF</span>
                    </td>
                  </thead>
                </table>
              </div>
              <div class="field is-horizontal">
              <div class="field-body">
                <div class="field">
                  <label class="label">Date du jour</label>
                  <p class="control is-expanded">
                    <input class="input" type="date" name="Date du jour" />
                  </p>
                </div>
                <div class="field">
                  <label class="label">Signature <span class="is-size-7">(Pour les mineurs, signature du représentant légal)</span></label>
                  <p class="control is-expanded">
                    <input class="input" type="text" name="Signature" />
                  </p>
                </div>
              </div>
            </div>
            <p class="has-text-danger">*Merci de remplir tous les champs</p>
              <br />

              <div class="container has-text-centered">
              <button class="button is-primary is-rounded is-medium is-outlined is-uppercase">
               Envoyer le formulaire
              </button>
                  <p>

                  </p>
            </div>
              <br />
              <div>
              <span><sup>1 </sup>: Pour usage statistique de Swiss Badminton uniquement.</span><br/>
              <span><sup>2 </sup>: Montant unique la première année.</span><br/>
              <span><sup>3 </sup>: Montant obligatoire reversé à la fédération Swiss Badminton.</span><br/>
              <span><sup>4 </sup>: Facultatif, cotisation de soutien reversée à la fédération</span><br/><br/>
              </div>
            </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  )
}

export default FormulaireInscription
