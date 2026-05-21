const CACHE_NAME = "alaa-munir-v1";
const urlsToCache = [
  "./",
  "./index.html",
  "./ss.png",
  "./aa.png",
  "./nn.png",
  "./sawt.mp3",
  "./takhrij.mp4"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache).catch(err => {
        console.log('Cache failed:', err);
      });
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(self.clients.claim());
});
