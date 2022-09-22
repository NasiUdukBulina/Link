$(".owl-carousel").owlCarousel({
  loop: false,
  center: true,
  margin: 20,
  lazyLoad: true,
  URLhashListener: true,
  // autoplayHoverPause: true,
  startPosition: "URLHash",
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});
