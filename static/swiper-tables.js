import Swiper from "https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js";

const swiper = new Swiper(".swiper-container", {
  slidesPerView: 3,
  spaceBetween: 0,

  breakpoints: {
    480: {
      slidesPerView: 5,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiper2 = new Swiper(".swiper-container-home", {
  slidesPerView: 1,
  spaceBetween: 0,
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
