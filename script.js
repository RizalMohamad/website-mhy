// const navbar = document.getElementsByTagName("nav")[0];
// const text = document.getElementsByClassName("text")[0];
// window.addEventListener("scroll", function () {
//   console.log(window.scrollY);
//   if (window.scrollY > 1) {
//     navbar.classList.replace("bg-transparent", "nav-color");
//     text.classList.replace();
//   } else if (window.scrollY <= 0) {
//     navbar.classList.replace("nav-color", "bg-transparent");
//   }
// });

// SLIDER
var carouselWidth = $(".carousel-inner")[0].scrollWidth;
var cardWidth = $(".carousel-item").width();

var scrollPosition = 0;

$(".carousel-control-next").on("click", function () {
  if (scrollPosition < carouselWidth - cardWidth * 4) {
    //check if you can go any further
    scrollPosition += cardWidth; //update scroll position
    $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600); //scroll left
  }
});

$(".carousel-control-prev").on("click", function () {
  if (scrollPosition > 0) {
    scrollPosition -= cardWidth;
    $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
  }
});

