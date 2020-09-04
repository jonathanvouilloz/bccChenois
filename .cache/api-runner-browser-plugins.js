module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"BC Chênois","short_name":"BCC","icon":"src/images/iconWebApp.png","start_url":"/","background_color":"#363636","theme_color":"#35B0F6","display":"standalone","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"a0365543d1048666fcb58c74f80e7280"},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[],"precachePages":["/interclub/","/news/*","/informations/*"]},
    },{
      plugin: require('../node_modules/gatsby-plugin-transition-link/gatsby-browser.js'),
      options: {"plugins":[]},
    }]
