import React from 'react'
import styles from "./posts.module.css"
import { GiShuttlecock } from "react-icons/gi"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"


const BlogListComponent = ({ key, post}) => {
  const {
    content: { json },
  } = post
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
         
            </span>
            <br />
          </div>
          <div class="content has-text-left">
            <span>
            <AniLink to={`/news/${post.slug}`}>
            Lire l'article
          </AniLink>
            </span>
          </div>
        </div>
      </div>
      </div>
    )
}

export default BlogListComponent
