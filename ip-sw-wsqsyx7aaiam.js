// Service worker: شبكة أولاً ثم الكاش عند انقطاع الاتصال
const C='teba-ip-v1',APP='ip-k0ih4bt02klsr184.html',FILES=[APP,'ip-access-5mhrcaaoc2ygmi.js','ip-app-fpfso3yekdvx.webmanifest','ip-icon-192.png','ip-icon-512.png'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>Promise.all(FILES.map(f=>c.add(f).catch(()=>0)))))});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET'||new URL(r.url).origin!==location.origin)return;
  e.respondWith(fetch(r).then(res=>{if(res.ok){const cp=res.clone();caches.open(C).then(c=>c.put(r,cp))}return res}).catch(()=>caches.match(r).then(m=>m||(r.mode==='navigate'?caches.match(APP):Response.error()))))});
