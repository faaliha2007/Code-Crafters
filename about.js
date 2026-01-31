// ===== HUSTLE FITNESS — ABOUT PAGE SCRIPT =====
// All IDs prefixed with "ab" to avoid conflicts with other pages

// Close Popup
document.getElementById('abPopupClose').addEventListener('click', function () {
    document.getElementById('abPopupBar').style.display = 'none';
});

// Hamburger Menu
var abHamburger = document.getElementById('abHamburger');
var abNavLinks = document.getElementById('abNavLinks');
var abMenuOverlay = document.getElementById('abMenuOverlay');

// Toggle menu open/close
abHamburger.addEventListener('click', function () {
    abHamburger.classList.toggle('ab-active');
    abNavLinks.classList.toggle('ab-active');
    abMenuOverlay.classList.toggle('ab-active');
});

// Close menu when overlay is clicked
abMenuOverlay.addEventListener('click', function () {
    abHamburger.classList.remove('ab-active');
    abNavLinks.classList.remove('ab-active');
    abMenuOverlay.classList.remove('ab-active');
});

// Close menu when any nav link is clicked
document.querySelectorAll('.ab-nav-links li a').forEach(function (link) {
    link.addEventListener('click', function () {
        abHamburger.classList.remove('ab-active');
        abNavLinks.classList.remove('ab-active');
        abMenuOverlay.classList.remove('ab-active');
    });
});
