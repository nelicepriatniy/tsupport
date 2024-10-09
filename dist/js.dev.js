"use strict";

var _ref;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var headerMenuButtonOpen = document.querySelector(".header__menu-button");
var headerMenuButtonClose = document.querySelector(".header__menu__close-button");

headerMenuButtonOpen.onclick = function () {
  document.querySelector(".header__menu").classList.add("active");
};

headerMenuButtonClose.onclick = function () {
  document.querySelector(".header__menu").classList.remove("active");
};

var services = document.querySelectorAll(".services__list__item");

if (services.length > 0) {
  var _loop = function _loop(i) {
    services[i].onclick = function () {
      services[i].classList.toggle("active");
    };
  };

  for (var i = 0; i < services.length; i++) {
    _loop(i);
  }
}

var question = document.querySelectorAll(".freq-ask-questions__list__item");

if (question.length > 0) {
  var _loop2 = function _loop2(_i) {
    question[_i].onclick = function () {
      question[_i].classList.toggle("active");
    };
  };

  for (var _i = 0; _i < question.length; _i++) {
    _loop2(_i);
  }
}

var whatClientsThinkAboutUsQuotationPersonSwiper = new Swiper(".what-clients-think-about-us__quotation__person__swiper", {
  effect: "coverflow",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 10,
    modifier: 10,
    slideShadows: false
  },
  loop: true,
  centeredSlides: true,
  allowTouchMove: false,
  breakpoints: {
    375: {
      slidesPerView: "1"
    },
    1279: {
      slidesPerView: "3"
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
whatClientsThinkAboutUsQuotationPersonSwiper.on("activeIndexChange", function () {
  document.getElementById("quotation__content__text").textContent = this.slides[this.activeIndex].getAttribute("data-value");
});
var acquaintanceSwiper = new Swiper(".acquaintance__swiper", {
  breakpoints: {
    375: {
      slidesPerView: "1"
    },
    1279: {
      slidesPerView: "4"
    }
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});
var keysesSlider = new Swiper('.keyses-swiper', (_ref = {
  speed: 400,
  spaceBetween: 100,
  slidesPerView: 3
}, _defineProperty(_ref, "spaceBetween", 30), _defineProperty(_ref, "pagination", {
  el: '.keyses-swiper-pagination'
}), _defineProperty(_ref, "breakpoints", {
  375: {
    slidesPerView: 1
  },
  1279: {
    slidesPerView: 3
  }
}), _ref));