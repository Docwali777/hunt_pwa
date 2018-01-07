const cacheName = 'product-hunt';

const files = ['/material.min.css', '/material.min.js', '/index.html', '/']

self.addEventListener('install', event => { event.waitUntil(
	caches.open(cacheName).then(cache => cache.addAll([
		'/bootstrap.js','/material.min.css','/material.min.js','/static/js/bundle.js','/index.html','/']))
	);
});
