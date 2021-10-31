
let logo  = document.querySelector(".logo")
let header__logo  = document.querySelector(".header__logo")
let header  = document.querySelector(".header")

let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {
  if( scroll_pos>700){
    logo.src = "./img/logo.png"
    header__logo.classList.add("scroll_logo")
    header.classList.add("black")
  }else {
    logo.src = "./img/logo_w6.png"
    header__logo.classList.remove("scroll_logo")
    header.classList.remove("black")


  }
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});