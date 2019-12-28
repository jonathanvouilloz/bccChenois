const path = require("path")


exports.createPages = async function({ actions, graphql }) {
    const {createPage} = actions;

    const { data } = await graphql(`
    query {
        posts:allContentfulBlogPost {
          edges {
            node {
              slug
            }
          }
        }
      }
    `)
    data.posts.edges.forEach(({node}) => {

      createPage({
        path: `blog/${node.slug}`,
        component: require.resolve(`./src/templates/blogTemplate.js`),
        context: { slug: node.slug },
      })
    })
  }