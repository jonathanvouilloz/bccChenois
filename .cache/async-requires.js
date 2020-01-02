// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-template-js": () => import("./../src/templates/blogTemplate.js" /* webpackChunkName: "component---src-templates-blog-template-js" */),
  "component---cache-dev-404-page-js": () => import("./dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("./../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-informations-js": () => import("./../src/pages/informations.js" /* webpackChunkName: "component---src-pages-informations-js" */),
  "component---src-pages-inscription-js": () => import("./../src/pages/inscription.js" /* webpackChunkName: "component---src-pages-inscription-js" */),
  "component---src-pages-interclub-js": () => import("./../src/pages/interclub.js" /* webpackChunkName: "component---src-pages-interclub-js" */),
  "component---src-pages-news-js": () => import("./../src/pages/news.js" /* webpackChunkName: "component---src-pages-news-js" */)
}

