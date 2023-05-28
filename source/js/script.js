const header = document.querySelector(".header");
const navMain = header.querySelector(".header-nav");
const navToggle = header.querySelector(".header-nav__toggle");

navMain.classList.remove("header-nav--nojs");
header.classList.remove("header--nojs");

navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("header-nav--closed")) {
    navMain.classList.remove("header-nav--closed");
    navMain.classList.add("header-nav--opened");
  } else {
    navMain.classList.add("header-nav--closed");
    navMain.classList.remove("header-nav--opened");
  }
});

const activateMap = () => {
  const image = document.querySelector(".map-block__img");
  const iframe = document.querySelector(".main-map__iframe");

  if (image && iframe) {
    iframe.classList.remove("main-map__iframe--no-js");
    image.classList.remove("map-block__img--no-js");
  }
};

activateMap();
