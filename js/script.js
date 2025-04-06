
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");
    const mobileBtn = document.getElementById("mobileBtn");
    const nav = document.querySelector(".nav");

    // Function to set active nav link on scroll 
    function updateActiveLink() {
        let scrollPosition = window.scrollY + 100; // Adjust offset for accuracy

        sections.forEach((section) => {
            if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
                navLinks.forEach((link) => link.classList.remove("active"));
                document.querySelector(`.nav-link[href="#${section.id}"]`)?.classList.add("active");
            }
        });
    }

    // Event listener for scrolling
    window.addEventListener("scroll", updateActiveLink);

    // Responsive navbar toggle
    mobileBtn.addEventListener("click", function () {
        // Toggle navbar open class
        nav.classList.toggle("open");

        // Toggle between the bars and cross icons
        if (nav.classList.contains("open")) {
            mobileBtn.classList.remove("fa-bars");
            mobileBtn.classList.add("fa-times");
        } else {
            mobileBtn.classList.remove("fa-times");
            mobileBtn.classList.add("fa-bars");
        }
    });

      // Close navbar when any nav link is clicked
      navLinks.forEach((link) => {
        link.addEventListener("click", function () {
            // Close the navbar and revert the icon to the hamburger
            nav.classList.remove("open");
            mobileBtn.classList.remove("fa-times");
            mobileBtn.classList.add("fa-bars");
        });
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

    // Portfolio filtering
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows',
        stagger: 30,
        transitionDuration: '0.8s',
        masonry: {
            columnWidth: '.portfolio-item',
            gutter: 20
        }
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');
        portfolioIsotope.isotope({ filter: $(this).data('filter') });
        
        // Force re-layout after filtering
        setTimeout(function() {
            portfolioIsotope.isotope('layout');
        }, 300);
    });

    // Initial layout
    portfolioIsotope.isotope('layout');
});

// footer section add 
document.getElementById("year").textContent = new Date().getFullYear();
