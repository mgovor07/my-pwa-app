const CACHE_NAME = 'my-pwa-cache-v1';
const urlsToCache = [
    '/my-pwa-app/',
    '/my-pwa-app/index.html',
    '/my-pwa-app/sw.js',
    '/my-pwa-app/manifest.json',
    '/my-pwa-app/icon-192x192.png',
    '/my-pwa-app/icon-512x512.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});