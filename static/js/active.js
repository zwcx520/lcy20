(function ($) {
  ('use strict');

  $(window).on('load', function () {
    // Preloader Active Code
    $(document).ready(function () {
      $('#container').addClass('loaded');
      // Once the container has finished, the scroll appears
      if ($('#container').hasClass('loaded')) {
        // It is so that once the container is gone, the entire preloader section is deleted
        $('#preloader')
          .delay(500)
          .queue(function () {
            $(this).remove();
          });
      }
    });

    // WoW Js
    var wow = new WOW({
      boxClass: 'wow', // default
      animateClass: 'animated', // default
      offset: 100, // default
      mobile: true, // default
      live: true, // default
    });
    wow.init();

    // Funfact
    if ($('.odometer').length > 0) {
      $('.odometer').appear(function () {
        var odo = $('.odometer');
        odo.each(function () {
          var countNumber = $(this).attr('data-count');
          $(this).html(countNumber);
        });
      });
    }

    // Isotop Projects Filter
    const $container = $('.projects-container');
    $container.isotope({
      filter: '*',
      animationOptions: {
        queue: true,
      },
    });

    $('.project-section ul li').click(function () {
      $('.project-section ul li.active').removeClass('active');
      $(this).addClass('active');
      const selector = $(this).attr('data-filter');
      $container.isotope({
        filter: selector,
        animationOptions: {
          queue: true,
        },
      });
      return false;
    });
  });

  // Sticky Header
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 50) {
      $('.site-header-sticky').addClass('scrolling');
    } else {
      $('.site-header-sticky').removeClass('scrolling');
    }
    if ($(window).scrollTop() >= 200) {
      $('.site-header-sticky.scrolling').addClass('reveal-header');
    } else {
      $('.site-header-sticky.scrolling').removeClass('reveal-header');
    }
  });

  //  OnePage Active Class
  $(document).ready(function () {
    $('#nav-one-page').onePageNav({
      currentClass: 'current-menu',
      changeHash: false,
      easing: 'swing',
    });
  });

  // Popup
  $(document).ready(function () {
    $('.modal-popup').magnificPopup({
      type: 'inline',
      fixedContentPos: false,
      fixedBgPos: true,
      overflowY: 'auto',
      closeBtnInside: true,
      preloader: false,
      midClick: true,
      removalDelay: 300,
      mainClass: 'popup-mfp',
    });
  });

  // Testimonial Slider
  $('.testimonial-slider').owlCarousel({
    loop: true,
    autoplay: true,
    smartSpeed: 1500,
    margin: 50,
    dots: true,
    dotsEach: true,
    nav: false,

    responsive: {
      0: { items: 1 },
      480: { items: 1 },
      768: { items: 2 },
      1040: { items: 2 },
      1200: { items: 3 },
      1600: { items: 3 },
      1920: { items: 3 },
    },
  });

  // Brands Slider
  $('.brands-slider').owlCarousel({
    items: 5,
    loop: true,
    autoplay: true,
    smartSpeed: 1500,
    margin: 100,
    responsive: {
      0: { items: 2 },
      480: { items: 2 },
      768: { items: 3 },
      1040: { items: 4 },
      1200: { items: 5 },
      1600: { items: 5 },
      1920: { items: 5 },
    },
  });
})(jQuery);
