const CACHE = 'all-about-you-2-v1';
const ASSETS = ['/AllAboutYou2/', '/AllAboutYou2/index.html'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
