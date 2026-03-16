const CACHE_NAME = "shipment-app-cache-v1";
const urlsToCache = [
  "index.html",
  "next.html",
  "next2.html",
"next3.html",
"next4.html",
"ui,css",
  "manifest.json",
  "icons/icon-192.png",
  "icons/icon-512.png"
];

// インストール時にキャッシュ
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// オフライン時はキャッシュを返す
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

