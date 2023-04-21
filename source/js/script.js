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
