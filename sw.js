const cacheName = "cache-v1";

const resourcesToCache = [
    '/', '/index.html'
];

/* Implementing Cache first Strategy */
self.addEventListener('fetch', event => {
    event.respondWith(caches.match(even.request).then(cachedItem => {
        return cachedItem || fetch(event.request);
    }));
})