var CACHE_NAME = 'media-items-cache';

self.addEventListener('install', event => {
  console.log('WORKER: Received "install" event');
  // Otherwise, it only updates after user leaves the site
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('fetch', event => {
  console.log('WORKER: Intercepted request for ' + event.request.url);

  if(event.request.method !== 'GET') {
    return;
  }

	if(event.request.url.endsWith('.jpeg')) {
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.add(event.request.url);
      })
	}

  event.respondWith(caches.match(event.request));
}):
