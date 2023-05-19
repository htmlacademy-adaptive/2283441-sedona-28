const header = document.querySelector('.header')
const navMain = header.querySelector('.header__nav');
const navToggle = header.querySelector('.nav__toggle');

navMain.classList.remove('header__nav--nojs');
header.classList.remove('header--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('header__nav--closed')) {
    navMain.classList.remove('header__nav--closed');
    navMain.classList.add('header__nav--opened');
  } else {
    navMain.classList.add('header__nav--closed');
    navMain.classList.remove('header__nav--opened');
  }
});

const activateMap = () => {
  const image = document.querySelector('.map-block__img');
  const iframe = document.querySelector('.main__map-iframe');

  if (image && iframe) {
    iframe.classList.remove('main__map-iframe--no-js');
    image.classList.remove('map-block__img--no-js');
  }
}

activateMap();
