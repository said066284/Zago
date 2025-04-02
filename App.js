if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js")
        .then(() => console.log("Service Worker Registered"))
        .catch(error => console.log("Service Worker Error:", error));
}

let deferredPrompt;
window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredPrompt = event;
    alert("📲 To install the app, click the install button in your browser!");
});

window.addEventListener("appinstalled", () => {
    console.log("✅ App Installed Successfully!");
});
