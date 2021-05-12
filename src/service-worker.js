workbox.core.setCacheNameDetails({ prefix: "test-pwa8" });

workbox.routing.registerRoute(
  new RegExp("https://jsonplaceholder.typicode.com/users"),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'cache-users'
  })
);

const bgSyncPlugin = new workbox.backgroundSync.Plugin('myQueueName', {
  maxRetentionTime: 24 * 60 // Retry for max of 24 Hours
});
workbox.routing.registerRoute(
  new RegExp('https://emarinfer-notes.herokuapp.com/users/signup'),
  new workbox.strategies.NetworkOnly({
    plugins: [bgSyncPlugin]
  }),
  'POST'
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

/**
 * https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch#enviando_datos_json
 * 
 * https://cli.vuejs.org/core-plugins/pwa.html#vue-cli-plugin-pwa
 * https://smithgeek.com/pwa-caching-with-workbox-and-cloudflare/
 * https://livebook.manning.com/book/progressive-web-apps/chapter-3/53
 * 
 * https://programmerclick.com/article/76121571311/
 * https://medium.com/@mario.brendel1990/offline-post-requests-with-workbox-vuejs-4df0e9f93da9
 * https://developers.google.com/web/tools/workbox/modules/workbox-background-sync
 * 
 * https://developer.chrome.com/docs/devtools/storage/indexeddb/
 */