import React from "react"
import styles from "./posts.module.css"
import { GiShuttlecock } from "react-icons/gi"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const BlogListComponent = ({ key, post, section }) => {
  return (
    <div className={section === "home" ? 'container is-fluid column is-10' : "container is-fluid column is-8"}>
      <div className="">
        <div className="columns">
          <div className="column is-8">
            <h1 className=" is-size-4 is-uppercase has-text-left">
              <AniLink to={`/news/${post.slug}`}>
                <span className={styles.underline}>{post.title}</span>
              </AniLink>
            </h1>
          </div>
          <div className="is-hidden-mobile  column is-4 has-text-right">
          <AniLink to={`/news/${post.slug}`}>
            <GiShuttlecock className={styles.iconBad} />
            </AniLink>
          </div>
        </div>
        <div className={styles.published}>
          <p className={styles.publishedText}>
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
