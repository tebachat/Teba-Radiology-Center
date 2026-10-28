// dicom-sw.js — Service Worker خفيف لـ DICOM Touch
// بيمسح أي كاش قديم ومابيخزّنش حاجة، فالصفحة بتتحمّل دايماً من السيرفر (آخر نسخة).
const SW_VER = '6.2.0';
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    try { const keys = await caches.keys(); await Promise.all(keys.filter(k => k !== 'share-inbox').map(k => caches.delete(k))); } catch (_) {}
    try { await self.clients.claim(); } catch (_) {}
  })());
});
