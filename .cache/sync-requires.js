const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("D:\\Projet Perso\\bccChenois\\.cache\\dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("D:\\Projet Perso\\bccChenois\\src\\pages\\404.js"))),
  "component---src-pages-horaires-js": hot(preferDefault(require("D:\\Projet Perso\\bccChenois\\src\\pages\\horaires.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("D:\\Projet Perso\\bccChenois\\src\\pages\\index.js"))),
  "component---src-pages-informations-js": hot(preferDefault(require("D:\\Projet Perso\\bccChenois\\src\\pages\\informations.js"))),
  "component---src-pages-inscription-js": hot(preferDefault(require("D:\\Projet Perso\\bccChenois\\src\\pages\\inscription.js"))),
  "component---src-pages-interclub-js": hot(preferDefault(require("D:\\Projet Perso\\bccChenois\\src\\pages\\interclub.js"))),
  "component---src-pages-news-js": hot(preferDefault(require("D:\\Projet Perso\\bccChenois\\src\\pages\\news.js"))),
  "component---src-pages-tarifs-js": hot(preferDefault(require("D:\\Projet Perso\\bccChenois\\src\\pages\\tarifs.js"))),
  "component---src-templates-blog-template-js": hot(preferDefault(require("D:\\Projet Perso\\bccChenois\\src\\templates\\blogTemplate.js"))),
  "component---src-templates-saison-template-js": hot(preferDefault(require("D:\\Projet Perso\\bccChenois\\src\\templates\\saisonTemplate.js")))
}

