// Add this JavaScript code to your existing main.js or a new JavaScript file
const mobileMenuButton = document.getElementById('mobileMenu');
const menuModal = document.getElementById('menuModal');
const closeButton = document.querySelector('.close-button');

mobileMenuButton.addEventListener('click', () => {
    menuModal.style.width = '100%';
    menuModal.style.left = '0';
});

closeButton.addEventListener('click', () => {
    menuModal.style.width = '0';
    menuModal.style.left = '-300px';
});

// Close the menu modal when a link is clicked
const menuLinks = document.querySelectorAll('.menu-modal-links a');

menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
        menuModal.style.width = '0';
        menuModal.style.left = '-300px';
    });
});
