// Close Popup
document.getElementById('popupClose').addEventListener('click', function() {
    document.getElementById('popupBar').style.display = 'none';
});

// Hamburger Menu
document.getElementById('hamburger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.getElementById('navLinks').classList.toggle('active');
    document.getElementById('menuOverlay').classList.toggle('active');
});

// Close menu when clicking overlay
document.getElementById('menuOverlay').addEventListener('click', function() {
    document.getElementById('hamburger').classList.remove('active');
    document.getElementById('navLinks').classList.remove('active');
    this.classList.remove('active');
});
