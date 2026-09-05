/* generato da costruisci-offline.mjs — versione 886ce9e7bc11 */
const CACHE = 'chiavi-in-mano-886ce9e7bc11';
const FILE = ['./', './index.html', './manifest.webmanifest', './icona-192.png', './icona-512.png', './icona-180.png'];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
    .then(() => self.clients.claim()));
});
// prima la cache, poi la rete: il gestionale deve aprirsi anche in cantiere senza campo
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then((r) => r || fetch(e.request)));
});
