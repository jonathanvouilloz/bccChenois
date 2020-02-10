/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-ed3ee247b1f6b063017f.js"
  },
  {
    "url": "styles.bb75e68c49df6186e4db.css"
  },
  {
    "url": "styles-50b14a0ccc631914d951.js"
  },
  {
    "url": "commons-d26039e416c10d1516de.js"
  },
  {
    "url": "app-09e3fbdcc053a54b93a4.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-87ef582ba388a83f73c0.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "7e3df54df30260e2b1b426bc3d9b45ef"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "c355c8040c47a63bfb3360e4b7cb6553"
  },
  {
    "url": "component---src-pages-interclub-js-a62d873fbfaf8e536d4f.js"
  },
  {
    "url": "page-data/interclub/page-data.json",
    "revision": "846e6e74fcfb5cb343d7d61ca3785a46"
  },
  {
    "url": "component---src-templates-blog-template-js-ce305039a5b5722d9e0a.js"
  },
  {
    "url": "page-data/news/essai-darticle/page-data.json",
    "revision": "dcfaa27c5f798a25e12588b2428b652c"
  },
  {
    "url": "page-data/news/formulaire-dinscription/page-data.json",
    "revision": "43214b7816fa7570166bc1ab89245190"
  },
  {
    "url": "component---src-pages-news-js-82635b014511f235f681.js"
  },
  {
    "url": "page-data/news/page-data.json",
    "revision": "3a7e69b352af3689cbec1d0770933a91"
  },
  {
    "url": "page-data/news/premier-article/page-data.json",
    "revision": "baae5d810693665f77ee7e9e0cfcb1b1"
  },
  {
    "url": "page-data/news/reprise-2019/page-data.json",
    "revision": "9156280fa21033a43acafa2b0626b20b"
  },
  {
    "url": "component---src-pages-informations-js-3b3f5c17f7e34ccad871.js"
  },
  {
    "url": "page-data/informations/page-data.json",
    "revision": "3635ce0ab041286251c0f5544743248d"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "fa914fb65ff01c13f6ae109e1d43d6ee"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\page-data\/.*\/page-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-09e3fbdcc053a54b93a4.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
