const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-template-js": hot(preferDefault(require("D:\\gatsby\\bccChenois\\src\\templates\\blogTemplate.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("D:\\gatsby\\bccChenois\\src\\pages\\404.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("D:\\gatsby\\bccChenois\\src\\pages\\blog.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("D:\\gatsby\\bccChenois\\src\\pages\\index.js"))),
  "component---src-pages-informations-js": hot(preferDefault(require("D:\\gatsby\\bccChenois\\src\\pages\\informations.js"))),
  "component---src-pages-join-us-js": hot(preferDefault(require("D:\\gatsby\\bccChenois\\src\\pages\\joinUs.js")))
}

