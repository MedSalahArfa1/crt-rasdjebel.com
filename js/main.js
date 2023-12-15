(function ($) {
    "use strict";

    // Spinner
    let spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    

    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    margin: 20, // Adjust margin for spacing between items
    dots: false,
    loop: true,
    nav: true,
    stagePadding: 0, // Remove stage padding
    startPosition: '-1',
    navText: [
        '<i class="bi bi-chevron-left"></i>',
        '<i class="bi bi-chevron-right"></i>'
    ],
    responsive: {
        0: {
            items: 1,
            margin: 10 // Adjust margin for smaller screens
        },
        576: {
            items: 2,
            margin: 20 // Adjust margin for medium screens
        },
        992: {
            items: 3,
            margin: 620,
            stagePadding: 80,
        }
    },
    onInitialized: function (event) {
        let $element = $(event.target);
        let $items = $element.find('.owl-item');
        let centerIndex = Math.floor($items.length / 2);

        // Center the second item horizontally
        $element.trigger('to.owl.carousel', centerIndex);
    }
});

    
    
})(jQuery);

$(document).ready(function() {
    // Smooth scrolling when a link is clicked
    $('a').on('click', function(event) {
      if (this.hash !== '') {
        event.preventDefault();
        let hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function() {
          window.location.hash = hash;
        });
      }
    });
});

$(document).ready(function() {
    $(".navbar-nav .nav-link").on("click", function() {
        // Check if the navbar is expanded
        if ($(".navbar-collapse").hasClass("show")) {
            // Close the navbar
            $(".navbar-toggler").click();
        }
    });
});


