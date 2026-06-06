// No caching — always fetch fresh from network
self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request));
});
