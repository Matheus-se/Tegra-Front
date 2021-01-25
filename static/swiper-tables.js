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
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiper3 = new Swiper(".swiper-container-quarters", {
  slidesPerView: "auto",
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  CSSWidthAndHeight: true
});