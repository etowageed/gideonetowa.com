const cta_menu = document.getElementById("cta-menu");
const mobile_nav = document.getElementById("mobile-nav");
const mobLinks = document.querySelectorAll(".mobLinks");
const preloader = document.getElementById("preloader")


cta_menu.addEventListener("click", () => {
    mobile_nav.classList.toggle("hidden");

    if (document.getElementById("cta-menu").className == "fa fa-bars fa-lg") {
        document.getElementById("cta-menu").className = "fa fa-times fa-lg";
    
      } else {
        document.getElementById("cta-menu").className = "fa fa-bars fa-lg";
      }
});

// mobLinks.addEventListener("click", () => {
//     mobile_nav.classList.toggle("hidden");
// })
function closeMenu() {
    mobile_nav.classList.toggle("hidden");
    if (document.getElementById("cta-menu").className == "fa fa-times fa-lg") {
      document.getElementById("cta-menu").className = "fa fa-bars fa-lg";
  
    } else {
      document.getElementById("cta-menu").className = "fa fa-bars fa-lg";
    }
};

// Preloader code

// window.addEventListener('load', function(){
//   preloader.style.display = "none"
// })

// gsap 

gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero-writeup", {duration: 2, x: "100%", ease: "back.out"});

gsap.from(".about-section", { scrollTrigger: {
  trigger: ".about-section", 
  toggleActions: "restart none none none", 
}, duration: 2, y: "60%", ease: "back.out"});

gsap.from(".work", { scrollTrigger: {
  trigger: ".work", 
  toggleActions: "restart none none none", 
}, duration: 2, y: "20%", ease: "back.out"});

gsap.from(".contact-div", { scrollTrigger: {
  trigger: ".contact-div", 
  toggleActions: "restart none none none", 
}, duration: 2, y: "20%", ease: "back.out"});