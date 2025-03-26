
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll(".nav-link");
    const mobileBtn = document.getElementById("mobileBtn");
    const nav = document.querySelector(".nav");

    // function to set active nav link on scroll 
    function updateActiveLink() {
        let scrollPosition = window.scrollY + 100; // Adjust offset for accuracy

        sections.forEach((section) => {
            if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
                navLinks.forEach((link) => link.classList.remove("active"));
                document.querySelector(`.nav-link[href="#${section.id}"]`)?.classList.add("active");
            }
        });
    }

    // event listener for scrolling
    window.addEventListener("scroll", updateActiveLink);



    // Responsive navbar toggle
    mobileBtn.addEventListener("click", function () {
        nav.classList.toggle("open");
    });
});




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



// footer section add 
document.getElementById("year").textContent = new Date().getFullYear();
