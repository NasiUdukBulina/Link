if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    // Register Baru
    navigator.serviceWorker
      .register("/sw.js")
      .then((reg) => console.log("service worker terdaftar", reg))
      .catch((err) => console.log("service worker tidak terdaftar", err));

    // Register Lama
    // navigator.serviceWorker.register("/sw.js").then(
    //   function (registration) {
    //     console.log("service wolker berjalan", registration.scope);
    //   },
    //   function (err) {
    //     console.log("service wolker gagal :(", err);
    //   }
    // );
  });
}
