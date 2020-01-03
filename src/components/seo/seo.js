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
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            <link rel="manifest" href="/site.webmanifest"></link>
            <meta name="keywords" content="badminton, chênois, thônex, chêne-bourg, genève, interclub, junior, jeune, bcc, essayer, amusement, sport, enfant, adolescent" />
            <meta name="twitter:creator" content={twitterUsername}/>
        </Helmet>
    )
}

export default Seo