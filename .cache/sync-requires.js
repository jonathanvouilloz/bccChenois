const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-template-js": hot(preferDefault(require("D:\\gatsby\\bccChenois\\src\\templates\\blogTemplate.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("D:\\gatsby\\bccChenois\\.cache\\dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("D:\\gatsby\\bccChenois\\src\\pages\\404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("D:\\gatsby\\bccChenois\\src\\pages\\index.js"))),
  "component---src-pages-informations-js": hot(preferDefault(require("D:\\gatsby\\bccChenois\\src\\pages\\informations.js"))),
  "component---src-pages-inscription-js": hot(preferDefault(require("D:\\gatsby\\bccChenois\\src\\pages\\inscription.js"))),
  "component---src-pages-interclub-js": hot(preferDefault(require("D:\\gatsby\\bccChenois\\src\\pages\\interclub.js"))),
  "component---src-pages-news-js": hot(preferDefault(require("D:\\gatsby\\bccChenois\\src\\pages\\news.js")))
}

