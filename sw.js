const cacheName = "cache-v1";

const resourcesToCache = [
    '/', '/index.html','images/biryani-veg.png','images/biryani.png','images/burger.png','images/chineese.jpg','images/falooda.png','images/food.png','images/fries.jpeg','images/icecream.png','images/logo.png','images/shakes.png','images/sandwitch.svg','images/shakes.png','images/sundae.png'
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
