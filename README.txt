# ALISLAH PWA setup

Upload `manifest.json`, `sw.js`, and the `icons` folder to the **same GitHub Pages folder** as `index.html`.

Then make these two small edits to `index.html`:

1. Inside `<head>`, immediately before `</head>`, add:
<link rel="manifest" href="./manifest.json">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="ALISLAH">

2. Immediately before `</body>`, add:
<script>
if ("serviceWorker" in navigator && location.protocol === "https:") {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(err => console.warn("SW registration failed", err));
  });
}
</script>

Keep all existing app code. Do not upload API keys or secrets.

After GitHub Pages updates, open the site in Chrome on Android, use the three-dot menu, then choose **Install app** or **Add to Home screen**. Offline mode caches the app shell/static files; the AI assistant still requires internet.
