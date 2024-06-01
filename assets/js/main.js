const scrollers = document.querySelectorAll(".scroller");
if (!window.matchMedia("(prefers-reduce-motion: reduce)").matches) 
{
  addAnimation();
}

function addAnimation() 
{
    scrollers.forEach((scroller)=>{
    scroller.setAttribute("data-animated", true);
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);
    scrollerContent.forEach(item =>{
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden" , true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}
  
  const mobileMenuButton = document.getElementById("mobileMenu");
  const mainNav = document.getElementById("mainNav");
  console.log(mobileMenuButton)
  mobileMenuButton.addEventListener("click", toggleMobileMenu);

  function toggleMobileMenu() 
  {
    
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

/*   ScrollReveal({
    reset: true,
    distance: "80px",
    duration: 2000,
    delay: 200,
    easing: 'ease-out'
  });
  ScrollReveal().reveal(".work-list", { origin: "bottom" }); */


  /// scoller 

  