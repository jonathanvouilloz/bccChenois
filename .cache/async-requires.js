// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-template-js": () => import("./../src/templates/blogTemplate.js" /* webpackChunkName: "component---src-templates-blog-template-js" */),
  "component---src-pages-404-js": () => import("./../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-blog-js": () => import("./../src/pages/blog.js" /* webpackChunkName: "component---src-pages-blog-js" */),
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-informations-js": () => import("./../src/pages/informations.js" /* webpackChunkName: "component---src-pages-informations-js" */),
  "component---src-pages-join-us-js": () => import("./../src/pages/joinUs.js" /* webpackChunkName: "component---src-pages-join-us-js" */)
}

