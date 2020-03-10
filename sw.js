const cacheName = "cache-v1";

const resourcesToCache = [
    '/', '/index.html','images/'
];

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName)
            .then(function (cache) {
                console.log('Opened cache');
                return cache.addAll(resourcesToCache);
            })
    );
});

/* Implementing Cache first Strategy */
self.addEventListener('fetch', event => {
    event.respondWith(caches.match(event.request).then(cachedItem => {
        return cachedItem || fetch(event.request);
    }));
});
