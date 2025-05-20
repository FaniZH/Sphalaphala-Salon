document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".landingPage");
    let currentIndex = 0;
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }

    document.getElementById("prev").addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
    });

    document.getElementById("next").addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    });

    // Initially show only the first slide
    showSlide(currentIndex);
});

document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.classList.add("scrolled"); // Add class when scrolled
        } else {
            header.classList.remove("scrolled"); // Remove class when at top
        }
    });
});

// JavaScript for dropdown functionality on mobile/touch devices
document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector(".dropdown");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    dropdown.addEventListener("click", function (event) {
        event.preventDefault();
        dropdownMenu.style.display =
            dropdownMenu.style.display === "flex" ? "none" : "flex";
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
        if (!dropdown.contains(event.target)) {
            dropdownMenu.style.display = "none";
        }
    });

    // Navbar background change on scroll
    window.addEventListener("scroll", function () {
        const header = document.querySelector("header");
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const staffContainer = document.querySelector(".staff_container");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    // Scroll left when clicking "<" button
    prevBtn.addEventListener("click", function () {
        staffContainer.scrollBy({ left: -300, behavior: "smooth" });
    });

    // Scroll right when clicking ">" button
    nextBtn.addEventListener("click", function () {
        staffContainer.scrollBy({ left: 300, behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const staffContainer = document.querySelector(".clients_container");
    const prevBtn = document.getElementById("prevBtn1");
    const nextBtn = document.getElementById("nextBtn2");

    // Scroll left when clicking "<" button
    prevBtn.addEventListener("click", function () {
        staffContainer.scrollBy({ left: -300, behavior: "smooth" });
    });

    // Scroll right when clicking ">" button
    nextBtn.addEventListener("click", function () {
        staffContainer.scrollBy({ left: 300, behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".slide-up");

    function checkScroll() {
        elements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 50) {
                element.classList.add("active");
            } else {
                element.classList.remove("active"); // Remove if you want it to trigger again on scroll up
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Run on page load
});

document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab");
    const menuSections = document.querySelectorAll(".Hair_items, .Combo_items, .Weekly_items");

    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            tabs.forEach(t => t.classList.remove("active"));
            this.classList.add("active");

            const category = this.getAttribute("data-category");

            menuSections.forEach(section => {
                if (section.classList.contains(category)) {
                    section.style.display = "grid"; // Maintain grid layout
                } else {
                    section.style.display = "none";
                }
            });
        });
    });

    // Ensure only the "Daily Hair" tab is visible by default
    document.querySelector(".Combo_items").style.display = "none";
    document.querySelector(".Weekly_items").style.display = "none";
});

document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab");
    const products = document.querySelectorAll(".Classic_Range, .Luxe_Range, .Retail_Products");

    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            tabs.forEach(t => t.classList.remove("active"));
            this.classList.add("active");

            const category = this.getAttribute("data-category");

            products.forEach(section => {
                if (section.classList.contains(category)) {
                    section.style.display = "grid"; // Maintain grid layout
                } else {
                    section.style.display = "none";
                }
            });
        });
    });

    // Ensure only the "Daily Hair" tab is visible by default
    document.querySelector(".Luxe_Range").style.display = "none";
    document.querySelector(".Retail_Products").style.display = "none";
});

document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const closeIcon = document.getElementById("close-icon");
    const navLinks = document.getElementById("nav-links");
    const header = document.querySelector("header");

    // Toggle Menu on Click
    menuIcon.addEventListener("click", function () {
        navLinks.classList.add("show");
        menuIcon.style.display = "none";
        closeIcon.style.display = "block";
    });

    // Close Menu on Click
    closeIcon.addEventListener("click", function () {
        navLinks.classList.remove("show");
        menuIcon.style.display = "block";
        closeIcon.style.display = "none";
    });

    // Close Menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!menuIcon.contains(event.target) && !navLinks.contains(event.target) && !closeIcon.contains(event.target)) {
            navLinks.classList.remove("show");
            menuIcon.style.display = "block";
            closeIcon.style.display = "none";
        }
    });

    // Change Dropdown Background when Scrolled
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
            navLinks.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
            navLinks.classList.remove("scrolled");
        }
    });
});

document.getElementById("year").textContent = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.querySelector(".back-to-top");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            backToTopButton.classList.add("show");
        } else {
            backToTopButton.classList.remove("show");
        }
    });

    backToTopButton.addEventListener("click", function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});