import React from "react"
import styles from "./posts.module.css"
import { GiShuttlecock } from "react-icons/gi"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const BlogListComponent = ({ key, post }) => {
  return (
    <div class="container is-fluid column is-8">
      <div class="">
        <div class="columns">
          <div class="column is-8">
            <h1 class=" is-size-4 is-uppercase has-text-left">
              <AniLink to={`/news/${post.slug}`}>
                <span class={styles.underline}>{post.title}</span>
              </AniLink>
            </h1>
          </div>
          <div class="is-hidden-mobile  column is-4 has-text-right">
            <GiShuttlecock class={styles.iconBad} />
          </div>
        </div>
        <div class={styles.published}>
          <p class={styles.publishedText}>
            {post.publishedDate}
            <br />
            par {post.auteur}
          </p>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default BlogListComponent
