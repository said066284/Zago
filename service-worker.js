self.addEventListener("install", (event) => {
    console.log("Service Worker Installed");
    event.waitUntil(
        caches.open("app-cache").then((cache) => {
            return cache.addAll([
                "index.html",
                "manifest.json",
                "android-chrome-192x192.png",
                "android-chrome-512x512.png"
            ]);
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
