const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");  // Toggle the 'active' class for the hamburger
    navLinks.classList.toggle("active");   // Toggle the menu visibility
    navbar.classList.toggle("active");     // Toggle the navbar background color to white
});
