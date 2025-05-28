self.addEventListener('install', event => {
  console.log('[ServiceWorker] Installed')
  event.waitUntil(
    caches.open('static-v1').then(cache => {
      return cache.addAll(['/'])
    })
  )
})

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  )
})