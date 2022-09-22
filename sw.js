self.addEventListener("install", (event) => {
  const cacheKey = "Nasi-Uduk-Cache-v2";

  event.waitUntil(
    caches.open(cacheKey).then((cache) => {
      // Add all the assets in the array to the 'Nasi-Uduk-Cache-v2'
      // `Cache` instance for later use.
      return cache.addAll([
        "/",
        "./index.html",

        "./css/Home.css",
        "./css/Font.css",
        "./css/hero.css",
        "./css/ScrollMouse.css",
        "./css/wavestyle.css",
        "./css/online-order.css",
        "./css/navbar.css",
        "./css/bahan-masakan.css",
        "./css/menu-kami.css",
        "./css/footer.css",
        "./css/preload.css",

        "./manifest.json",
        "./main.js",
        "./sw.js",
        "./js/bootstrap.js",
        "./js/owl-carousel-slider.js",
      ]);
    })
  );
});

const cacheName = "Nasi-Uduk-Cache-v2";

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(cacheName));
});

self.addEventListener("fetch", async (event) => {
  // Is this a request for an image?
  if (event.request.destination === "image") {
    // Open the cache
    event.respondWith(
      caches.open(cacheName).then((cache) => {
        // Respond with the image from the cache or from the network
        return cache.match(event.request).then((cachedResponse) => {
          return (
            cachedResponse ||
            fetch(event.request.url).then((fetchedResponse) => {
              // Add the network response to the cache for future visits.
              // Note: we need to make a copy of the response to save it in
              // the cache and use the original as the request response.
              cache.put(event.request, fetchedResponse.clone());

              // Return the network response
              return fetchedResponse;
            })
          );
        });
      })
    );
  } else {
    return;
  }
});

// self.addEventListener("fetch", function (event) {
//   event.respondWith(
//     new Response("<h1>Hello Indonesia</h1>", {
//       headers: {
//         "Content-Type": "text/html",
//       },
//     })
//   );
// });

// Assets to precache
const precachedAssets = [
  "/",
  "./index.html",
  "./404.html",
  "./css/Home.css",
  "./css/Font.css",
  "./css/hero.css",
  "./css/ScrollMouse.css",
  "./css/wavestyle.css",
  "./css/online-order.css",
  "./css/navbar.css",
  "./css/bahan-masakan.css",
  "./css/menu-kami.css",
  "./css/footer.css",
  "./css/preload.css",
  "./manifest.json",

  "./main.js",
  "./sw.js",
  "./js/bootstrap.js",
  "./js/owl-carousel-slider.js",
];

self.addEventListener("install", (event) => {
  // Precache assets on install
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(precachedAssets);
    })
  );
});

self.addEventListener("fetch", (event) => {
  // Is this one of our precached assets?
  const url = new URL(event.request.url);
  const isPrecachedRequest = precachedAssets.includes(url.pathname);

  if (isPrecachedRequest) {
    // Grab the precached asset from the cache
    event.respondWith(
      caches.open(cacheName).then((cache) => {
        return cache.match(event.request.url);
      })
    );
  } else {
    // Go to the network
    return;
  }
});
