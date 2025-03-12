self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('medicaction-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/static/js/bundle.js'
      ]);
    })
  );
});