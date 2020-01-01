import React from "react"
import Layout from "../components/layout/layout"
import {Link} from 'gatsby'
import SEO from "../components/seo/seo"

const error = () => {
  return (
    <Layout>
                  <SEO titleD="404"  />

      <section className="hero is-primary is-large">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">Il n'y a rien ici...</h1>
            <Link to= "./" >
            <button className="button is-primary is-inverted is-outlined is-large">REVENIR A LA PAGE D'ACCUEIL</button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default error
