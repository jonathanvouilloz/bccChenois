import React from 'react'
import styles from "./posts.module.css"
import { GiShuttlecock } from "react-icons/gi"
import AniLink from "gatsby-plugin-transition-link/AniLink";

const BlogListComponent = ({ key, post}) => {
    return (
        <div class="container is-fluid column is-8">
        <div class="card">
        <div class="card-content container has-text-left">
          <div class="columns">
            <div class="column is-8">
              <h1 class=" is-size-4 is-uppercase">
                <span class={styles.underline}>{post.title}</span>
              </h1>
            </div>
            <div class="is-hidden-mobile  column is-4 has-text-right">
              <GiShuttlecock class={styles.iconBad} />
            </div>
          </div>
          <div class={styles.published}>
            <p class={styles.publishedText}>
                    Publié le {post.publishedDate}<br /> par {post.auteur}
            </p>
          </div>
          <div class="content has-text-left">
            <span class="has-text-grey">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor a commodo consequat. Duis aute irure dolor
              in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla...
            </span>
            <br />
          </div>
          <div class="content has-text-right">
            <span>
            <AniLink fade to={`/blog/${post.slug}`}>
            Lire la suite
          </AniLink>
            </span>
          </div>
        </div>
      </div>
      </div>
    )
}

export default BlogListComponent
