$(document).ready(function () {
    var navbar = $('#navbar');  // Cache the navbar element
    var scrollThreshold = $('#about').offset().top; // When the user scrolls past the "About" section

    $(window).scroll(function () {
        if ($(window).scrollTop() > scrollThreshold) {
            navbar.addClass('navbar-show'); // Show navbar when scrolled past the 'About' section
        } else {
            navbar.removeClass('navbar-show'); // Hide navbar when above the 'About' section
        }
    });
});
