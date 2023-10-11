// Add this JavaScript code to your existing main.js or a new JavaScript file
/* const mobileMenuButton = document.getElementById('mobileMenu');
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
*/


const mobileMenuButton = document.getElementById("mobileMenu");
  const mainNav = document.getElementById("mainNav");

  mobileMenuButton.addEventListener("click", toggleMobileMenu);

  function toggleMobileMenu() {
    console.log(mainNav);
    if (mainNav.style.display === "block") {
      mainNav.style.display = "none";
    } else {
      mainNav.style.display = "block";
    }
  } 

  // Close the mobile menu when a menu item is clicked
  const navLinks = document.querySelectorAll("#mainNav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });

  function closeMobileMenu() {
    mainNav.style.display = "none";
  }
