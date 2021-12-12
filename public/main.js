const cta_menu = document.getElementById("cta-menu");
const mobile_nav = document.getElementById("mobile-nav");
const mobLinks = document.querySelectorAll(".mobLinks");


cta_menu.addEventListener("click", () => {
    mobile_nav.classList.toggle("hidden");
});

// mobLinks.addEventListener("click", () => {
//     mobile_nav.classList.toggle("hidden");
// })
function closeMenu() {
    mobile_nav.classList.toggle("hidden");
};