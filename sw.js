var cacheName = "cache-v1";

var resourcesToCache = [
    '/', '/index.html','images/biryani-veg.png','images/biryani.png','images/burger.png','images/chineese.jpg','images/falooda.png','images/food.png','images/fries.jpeg','images/icecream.png','images/logo.png','images/shakes.png','images/sandwitch.svg','images/sundae.png','https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css','https://fonts.googleapis.com/css?family=Lato:400,100,100italic,300,300italic,400italic,700,700italic,900,900italic','https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css','https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js','https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js','https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js','https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2?v=4.7.0'
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
