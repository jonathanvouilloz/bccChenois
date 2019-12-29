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
      }
    `)
    data.posts.edges.forEach(({previous, node}) => {
        createPage({
          path: `news/${node.slug}`,
          component: require.resolve(`./src/templates/blogTemplate.js`),
          context: { slug: node.slug},
        })
    })
  }