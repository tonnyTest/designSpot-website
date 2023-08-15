// Sticky Header
$(document).ready(function() {
const navbar = document.querySelector('#NavBar');
function stickynavbar() {
  if (window.scrollY >= 30) {    
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');    
  }
}
window.addEventListener('scroll', stickynavbar);
});


//3d-slider
var swiperEl = document.querySelector(".mySwiper");
    Object.assign(swiperEl, {
      grabCursor: true,
      effect: "creative",
      creativeEffect: {
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      },
    });
    swiperEl.initialize()


    AOS.init();
