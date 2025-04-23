// script.js
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// Function to open the popup
function openForm() {
    const popup = document.getElementById('popupForm');
    popup.style.display = 'flex'; // Show the popup
    localStorage.setItem('popupVisible', 'true'); // Save state to localStorage
}

// Function to close the popup
function closeForm() {
    const popup = document.getElementById('popupForm');
    popup.style.display = 'none'; // Hide the popup
    localStorage.setItem('popupVisible', 'false'); // Save state to localStorage
}

// Check if the popup should be visible when DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    const popup = document.getElementById('popupForm');
    const popupVisible = localStorage.getItem('popupVisible');
    if (popupVisible === 'true') {
        popup.style.display = 'flex'; // Show the popup if it was open
    } else {
        popup.style.display = 'none'; // Hide the popup by default
    }
});
