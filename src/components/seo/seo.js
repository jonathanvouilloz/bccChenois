import React from 'react'
import {Helmet} from 'react-helmet'
import {useStaticQuery, graphql} from 'gatsby'

const Seo = ({titleD, descriptionD}) => {

    const getMetaData = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            title
            twitterUsername
            description
            image
          }
        }
      }
    `)
    const {title, description, image, twitterUsername} = getMetaData.site.siteMetadata;

    return (
        <Helmet htmlAttributes={{lang:"fr"}} title={title + ` | ` +titleD}>
            <meta name="description" content={description + ' - ' +descriptionD}/>
            <meta name="image" content={image} />
            <meta name="keywords" content="badminton, chênois, thônex, chêne-bourg, genève, interclub, junior, jeune, bcc, essayer, amusement, sport, enfant, adolescent" />
            <meta name="twitter:creator" content={twitterUsername}/>
        </Helmet>
    )
}

export default Seo