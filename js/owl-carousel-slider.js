// Owl Carousel
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

// Loading Load
$(window).on("load", function () {
  $(".loader-container").fadeOut(2000);
});
