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
    margin: 20, 
    dots: false,
    loop: true,
    nav: true,
    stagePadding: 0, 
    startPosition: '-1',
    navText: [
        '<i class="bi bi-chevron-left"></i>',
        '<i class="bi bi-chevron-right"></i>'
    ],
    responsive: {
        0: {
            items: 1,
            margin: 10 
        },
        576: {
            items: 2,
            margin: 20 
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

$(document).ready(function () {
    let lastScrollTop = 0;
    let navbar = $('.navbar-light');

    $(window).scroll(function () {
        let st = $(this).scrollTop();
        if (st > lastScrollTop) {
            // Scroll down
            navbar.addClass('navbar-hidden').removeClass('navbar-visible');
        } else {
            // Scroll up
            navbar.removeClass('navbar-hidden').addClass('navbar-visible');
        }
        lastScrollTop = st;
    });
});

$(document).ready(function () {
    let scrollingTimer;
    let navbar = $('.navbar-light');
    let navbarToggler = $(".navbar-toggler");
    let navbarLinks = $(".navbar-collapse").find(".nav-link");

    // Function to handle scrolling
    function handleScrolling() {
        clearTimeout(scrollingTimer);
        navbar.addClass('navbar-hidden');

        // Check if the navbar is open on mobile
        if ($(".navbar-collapse").hasClass("show")) {
            // Close the navbar
            navbarToggler.click();
        }

        scrollingTimer = setTimeout(function () {
            // Scrolling has stopped
            navbar.removeClass('navbar-hidden');
            // Remove 'active' class from navbar toggler
            navbarToggler.removeClass('active');
        }, 100);
    }

    // Scroll event listener
    $(window).scroll(handleScrolling);

    // Handle active state of menu links
    navbarLinks.on('click', function() {
        navbarLinks.removeClass('active');
        $(this).addClass('active');
    });

    // Close menu on link click
    navbarLinks.on('click', function() {
        navbarToggler.click();
    });
});


let map = L.map('map').setView([37.21, 10.12], 15);
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map);

let drawnItems = new L.FeatureGroup();
map.addLayer(drawnItems);

let MarkerIcon = L.icon({
    iconUrl: 'img/icon.ico',
    iconSize: [25, 25],
});

let marker;

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        document.getElementById("location").value = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    let location = [position.coords.latitude, position.coords.longitude];
    document.getElementById("location").value = location;

    if (marker) {
        map.removeLayer(marker);
    }

    marker = L.marker(location, { icon: MarkerIcon }).addTo(map);
    map.setView(location, 15);
}





