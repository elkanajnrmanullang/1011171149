//SWIPER SLIDER
var swiper = new Swiper(".bg-slider-thumbs", {
  loop: true,
  spaceBetween: 0,
  slidesPerView: 0,
});
var swiper2 = new Swiper(".bg-slider", {
  loop: true,
  effect: "fade",
  spaceBetween: 0,
  thumbs: {
    swiper: swiper,
  },
});

//Navbar Effect on Scroll
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

//Navbar Menu
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
  navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  navigation.classList.remove("active");
});

//Destination
var swiper = new Swiper(".slide-container-dst", {
  slidesPerView: 4,
  spaceBetween: 20,
  slidePerGroup: 4,
  loop: true,
  centerSlider: "true",
  fade: "true",
  grabCursor: "true",
  // loopFillGrouwithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
  },
});

// FILTER PAGE WISATA
$(".button-group").on("click", ".button-filter", function () {
  var filterValue = $(this).attr("data-filter");

  // Jika filterValue adalah "*", tampilkan semua elemen
  if (filterValue === "*") {
    $(".box-cards-blog .card").show();
  } else {
    // Sembunyikan semua elemen
    $(".box-cards-blog .card").hide();

    // Tampilkan elemen yang sesuai dengan filter
    $(".box-cards-blog .card" + filterValue).show();
  }
});

$(".button-group .button-filter").on("click", function () {
  $(".button-group .button-filter").removeClass("active");
  $(this).addClass("active");

  var value = $(this).attr("data-filter");
  $galleryContainer.isotope({
    filter: value,
  });
});
