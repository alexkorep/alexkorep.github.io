const CACHE_NAME = 'static-cache-v1'

// CODELAB: Add list of files to cache here.
const FILES_TO_CACHE = [
  '../index.htm',
  '../progresspie.css',
  '../img/ic_photo_camera_white_48px.svg',
  '../img/ic_camera_rear_white_36px.svg',
  '../img/ic_camera_front_white_36px.svg',
  '../img/ic_fullscreen_exit_white_48px.svg',
  '../img/ic_fullscreen_white_48px.svg',
  '../img/icons/icon-96x96.png',
  '../img/icons/icon-512x512.png',
  '../img/icons/icon-128x128.png',
  '../img/icons/icon-72x72.png',
  '../img/icons/icon-192x192.png',
  '../img/icons/icon-152x152.png',
  '../img/icons/icon-144x144.png',
  '../img/icons/icon-384x384.png',
  '../jsmodel/group1-shard1of4',
  '../jsmodel/group1-shard2of4',
  '../jsmodel/group1-shard3of4',
  '../jsmodel/model.json',
  '../jsmodel/group1-shard4of4',
  '../style.css',
  '../js/screenfull.min.js',
  '../js/main.js',
  '../js/DetectRTC.min.js',
  '../js/howler.core.min.js',
  '../js/tf.min.js',
  '../js/estimator.js',
  '../js/pwa.js',
  '../js/service-worker.js',
  '../js/adapter.min.js',
  '../manifest.json',
  '../snd/click.mp3',
  '../snd/beep.mp3',
]

self.addEventListener('install', (evt) => {
  console.log('[ServiceWorker] Install')
  // CODELAB: Precache static resources here.
  evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[ServiceWorker] Pre-caching offline page')
      return cache.addAll(FILES_TO_CACHE)
    })
  )
  self.skipWaiting()
})

self.addEventListener('activate', (evt) => {
  console.log('[ServiceWorker] Activate')
  // CODELAB: Remove previous cached data from disk.
  evt.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key !== CACHE_NAME) {
          console.log('[ServiceWorker] Removing old cache', key)
          return caches.delete(key)
        }
      }))
    })
  )
  self.clients.claim()
})

self.addEventListener('fetch', (evt) => {
  console.log('[ServiceWorker] Fetch', evt.request.url)
  // CODELAB: Add fetch event handler here.
  if (evt.request.mode !== 'navigate') {
    // Not a page navigation, bail.
    return;
  }
  evt.respondWith(
      fetch(evt.request)
          .catch(() => {
            return caches.open(CACHE_NAME)
                .then((cache) => {
                  return cache.match('offline.html');
                });
          })
  );
})
