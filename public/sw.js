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
    "url": "webpack-runtime-e07e42843e84259e83fa.js"
  },
  {
    "url": "styles.037663e02fd67b2dcd07.css"
  },
  {
    "url": "styles-89fd2ae28bdf06750a71.js"
  },
  {
    "url": "framework-63dbeff5ed53f0ef4f33.js"
  },
  {
    "url": "app-989804c85e5611c1a58a.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "14219e6a1c8ad2e1c1a2731cb72ea2ba"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-a583b50cb3c67156bcf7.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "f6081b83111aea4128c98944b7fafccc"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "5239105cf8c0ea1b3f9fe4693794ff5e"
  },
  {
    "url": "polyfill-841d95448641946e48b1.js"
  },
  {
    "url": "d7eeaac4-bc5104cffa6ac64c71bc.js"
  },
  {
    "url": "9d6989ad1a0d93db98b091be97abf2d3d1b25c74-1ea0504f0cdf4406a5ee.js"
  },
  {
    "url": "4ac34928cd6b39c45c8f227e4abdf64c4f96f7b2-cc4795a3202fdcd6ab71.js"
  },
  {
    "url": "f6afb18047dfa266a319cd2baa0bd607b4e60f9d-3100a4b57a2d1b75cad0.js"
  },
  {
    "url": "component---src-pages-interclub-js-0be880c1bfeafac2794d.js"
  },
  {
    "url": "page-data/interclub/page-data.json",
    "revision": "c9845d56cef47443f30c41538ca3a812"
  },
  {
    "url": "page-data/sq/d/3115887290.json",
    "revision": "4ef754153cbe4bd22772a38792d08624"
  },
  {
    "url": "page-data/sq/d/89934118.json",
    "revision": "fdc6ace7c135daced7cd4728faaa7ed9"
  },
  {
    "url": "a2a0c3a465097618821c4ee13eecb3f0e098c26f-96a9f851bf4669b6bb77.js"
  },
  {
    "url": "component---src-templates-blog-template-js-02e2d2291f90b58f9fb7.js"
  },
  {
    "url": "page-data/news/formulaire-dinscription/page-data.json",
    "revision": "0f194d5c42471854f2ef6c15c35748be"
  },
  {
    "url": "545f34e4-c4a456497cf5666ae245.js"
  },
  {
    "url": "e0964c8fc51d0049a2b7cf74729e64d21815a450-c3e68a8a5238cd39724b.js"
  },
  {
    "url": "component---src-pages-news-js-c59ca8003298daab653e.js"
  },
  {
    "url": "page-data/news/page-data.json",
    "revision": "eb5320d9e9cc2597de11ea8fc60cd3a7"
  },
  {
    "url": "page-data/sq/d/1206708315.json",
    "revision": "56b0110f6c9cdb59ac08acf466e71fe0"
  },
  {
    "url": "page-data/news/informations-covid-19-entrainements-et-sessions-libres/page-data.json",
    "revision": "b9ad29d8e2bcb570a1e4f4ee1168d88d"
  },
  {
    "url": "page-data/news/reprise-2019/page-data.json",
    "revision": "30dc4624f382b192d2e43298ce8ee354"
  },
  {
    "url": "component---src-pages-informations-js-8873b33a5e4cfab1e6dd.js"
  },
  {
    "url": "page-data/informations/page-data.json",
    "revision": "0bd52849b574023fd2ef6a3aac80c1be"
  },
  {
    "url": "page-data/sq/d/1628494583.json",
    "revision": "6293c3c7126ac5094ab92386db9097b7"
  },
  {
    "url": "page-data/sq/d/1713715591.json",
    "revision": "3064bb5d599dc7f79b661b259051cd44"
  },
  {
    "url": "page-data/sq/d/1821676971.json",
    "revision": "12afdacd4968f73dd83138a224dd5299"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "0cc86f2184d57a7c294e558be2ea6053"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

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
  if (!resources || !(await caches.match(`/app-989804c85e5611c1a58a.js`))) {
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
