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
  breakpoints:{
    0:{
      slidesPerView: 1,
    },
    520:{
      slidesPerView: 2,
    },
    768:{
      slidesPerView: 3,
    },
    1000:{
      slidesPerView: 4,
    },
  }
});

// FILTER PAGE WISATA
// Ambil semua tombol filter dan kartu yang dapat difilter
const filterButtons = document.querySelectorAll(".filter button");
const filterableCards = document.querySelectorAll(".box-cards-blog .card");

// Fungsi untuk memfilter kartu
const filterCards = (e) => {
    // Hapus kelas "active" dari tombol yang saat ini aktif
    const activeButton = document.querySelector(".active");
    if (activeButton) {
        activeButton.classList.remove("active");
    }

    // Tambahkan kelas "active" ke tombol yang diklik
    e.currentTarget.classList.add("active");

    // Loop melalui semua kartu dan tambahkan atau hapus kelas "hide"
    filterableCards.forEach(card => {
        card.classList.add("hide");

        // Jika kategori kartu cocok dengan kategori tombol atau tombol "All" dipilih
        if (card.dataset.name === e.currentTarget.dataset.name || e.currentTarget.dataset.name === "all") {
            card.classList.remove("hide");
        }
    });
};

// Tambahkan event listener ke setiap tombol filter
filterButtons.forEach(button => button.addEventListener("click", filterCards));
