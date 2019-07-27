"use strict";

/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);
/* Функция увеличивает индекс на 1, показывает следующй слайд*/

function plusSlide() {
  showSlides(slideIndex += 1);
}
/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/


function minusSlide() {
  showSlides(slideIndex -= 1);
}
/* Устанавливает текущий слайд */


function currentSlide(n) {
  showSlides(slideIndex = n);
}
/* Основная функция слайдера */


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('item');
  var dots = document.getElementsByClassName('slider-dots_item');

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }

  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
} // var nexTeam = document.querySelector(".invest-portfolio__item--nex-team");
// var homecourt = document.querySelector(".invest-portfolio__item--homecourt");
// nexTeam.addEventListener("mouseover", function(e) {
//   if (e) {
//     nexTeam.classList.add("active");
//   }
// });
// nexTeam.addEventListener("mouseout", function(e) {
//   if (e) {
//     nexTeam.classList.remove("active");
//   }
// });


var navBtn = document.querySelector('.user-menu__navigation-btn');
var closeNavBtn = document.querySelector('.menu-top__close-btn');
var navigation = document.querySelector('.main-navigation');
navBtn.addEventListener('click', function (event) {
  if (event) {
    navigation.classList.add('navigation-active');
  }
});
closeNavBtn.addEventListener('click', function (event) {
  if (event) {
    navigation.classList.remove('navigation-active');
  }
});