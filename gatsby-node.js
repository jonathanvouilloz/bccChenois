const path = require("path")


exports.createPages = async function({ actions, graphql }) {
    const {createPage} = actions;

    const { data } = await graphql(`
    query {
        posts:allContentfulBlogPost(sort:{fields:publishedDate,order:DESC}) {
          edges {
            node {
              slug
            }
          }
        } 
        saison:allContentfulResultats {
          edges {
            node {
              saison
            }
          }
        }
      }
    `)
    data.posts.edges.forEach(({node}) => {
        createPage({
          path: `news/${node.slug}`,
          component: require.resolve(`./src/templates/blogTemplate.js`),
          context: { slug: node.slug},
        })
    }),
    data.saison.edges.forEach(({node}) => {
      createPage({
        path: `interclub/${node.saison}`,
        component: require.resolve(`./src/templates/saisonTemplate.js`),
        context: { saison: node.saison},
      })
  })
  }