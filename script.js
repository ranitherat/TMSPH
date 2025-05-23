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

document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById('call-time');

    const pad = (num) => String(num).padStart(2, '0');

    const now = new Date();
    now.setSeconds(0, 0); // Clear seconds and milliseconds

    const year = now.getFullYear();
    const month = pad(now.getMonth() + 1);
    const day = pad(now.getDate());
    const hours = pad(now.getHours());
    const minutes = pad(now.getMinutes());

    const localDateTime = `${year}-${month}-${day}T${hours}:${minutes}`;
    input.min = localDateTime;

    input.addEventListener('input', function () {
        if (input.value) {
            input.classList.add('has-value');
        } else {
            input.classList.remove('has-value');
        }
    });
});


function goBack() {
    const referrer = document.referrer;
    if (referrer.includes('homepage.html')) {
        window.location.href = 'homepage.html';
    } else {
        history.back();
    }
}
