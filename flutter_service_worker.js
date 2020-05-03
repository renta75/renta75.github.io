'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon.ico": "2b5c4b03875e1a515523140e358ef738",
"404.html": "0a27a4163254fc8fce870c8cc3a3f94f",
"favicon-32x32.png": "654a5f7a0d442bc3207638bd1a19344e",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/assets/posters/filezila.png": "63f6344fa2f7ffe0ad46fc5b96b70124",
"assets/assets/posters/83427.webp": "2cdfbc99ecf760b22de5c8bf2c4c932f",
"assets/assets/posters/31846.webp": "b28987f4f65b8f7490844e8077efe7dd",
"assets/assets/posters/28002.webp": "f68407a07b2534de2c053c442fc5986b",
"assets/assets/posters/64370.webp": "573096b1f03fde342f970397fbf503a0",
"assets/assets/posters/81807.webp": "c84e00a6bee7142f35200bd6779c85a0",
"assets/assets/posters/50031.webp": "c5d9b213f95b0f0e80d85dd65d021c1f",
"assets/assets/videos.json": "be960720a362bfeb6acbb39995ea9fcd",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "3a16f605dad3e9a562b319c6f26cd36f",
"assets/AssetManifest.json": "0b009b6c1b533d114f8f3a029fe4e87f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon-16x16.png": "2ef4826788dac277b1cb6a3be9ed53ea",
"main.dart.js": "496fd89d4aad668bf9eb43cbed964f19",
"icons/Icon-512.png": "e35055cf7ae0aaf3a5957d2921e06516",
"icons/Icon-192.png": "2a92bc76aa84f888568daeb68863ee81",
"index.html": "ca902a11dacc97e30310b9f5c1f811b6",
"/": "ca902a11dacc97e30310b9f5c1f811b6",
"manifest.json": "3e1e4a3a9314cec90cd3cb2861d98111"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
