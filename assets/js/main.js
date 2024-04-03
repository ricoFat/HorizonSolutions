  const mobileMenuButton = document.getElementById("mobileMenu");
  const mainNav = document.getElementById("mainNav");

  mobileMenuButton.addEventListener("click", toggleMobileMenu);

  function toggleMobileMenu() 
  {
    console.log(mainNav);
    if (mainNav.style.display === "block") 
    {
      mainNav.style.display = "none";
    } 
    else 
    {
      mainNav.style.display = "block";
    }
  } 

  // Close the mobile menu when a menu item is clicked
  const navLinks = document.querySelectorAll("#mainNav a");
  navLinks.forEach((link) => 
  {
    link.addEventListener("click", closeMobileMenu);
  });

  function closeMobileMenu() {
    mainNav.style.display = "none";
  }

  ScrollReveal({
    reset: true,
    distance: "80px",
    duration: 2000,
    delay: 200,
    easing: 'ease-out'
  });
  ScrollReveal().reveal(".work-list", { origin: "bottom" });