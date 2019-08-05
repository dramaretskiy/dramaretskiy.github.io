"use strict";

var navBtn = document.querySelector(".user-menu__navigation-btn");
var closeNavBtn = document.querySelector(".menu-top__close-btn");
var navigation = document.querySelector(".main-navigation");
navBtn.addEventListener("click", function (event) {
  if (event) {
    navigation.classList.add("navigation-active");
  }
});
closeNavBtn.addEventListener("click", function (event) {
  if (event) {
    navigation.classList.remove("navigation-active");
  }
}); //

$(document).ready(function () {
  $(".investor-portfolio__firms-list").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr("href"),
        top = $(id).offset().top;
    $("body,html").animate({
      scrollTop: top
    }, 1500);
  });
}); //

var elements = document.querySelectorAll(".invest-portfolio__item");

if (document.documentElement.clientWidth > 1200) {
  elements.forEach(function (item, i, arr) {
    item.addEventListener("mouseover", function (event) {
      item.classList.add("active");
    });
    item.addEventListener("mouseout", function (event) {
      item.classList.remove("active");
    });
  });
}

if (document.documentElement.clientWidth < 725) {
  elements.forEach(function (item, i, arr) {
    item.addEventListener("click", function (event) {
      if (item.classList.contains("active-mobile")) {
        item.classList.remove("active-mobile");
      } else {
        item.classList.add("active-mobile");
      }
    });
  });
} //


$(document).ready(function () {
  $(".bubble-slider").slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 1,
    fade: true,
    adaptiveHeight: true,
    cssEase: "linear"
  });
});
$(document).ready(function () {
  $(".slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 1,
    adaptiveHeight: true
  });
});
$(document).ready(function () {
  $(".talk-to-us-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
}); // if (pageXOffset > 425) {
//   slid.classList.remove("slider");
// }
// /* Индекс слайда по умолчанию */
// var slideIndex = 1;
// showSlides(slideIndex);
// /* Функция увеличивает индекс на 1, показывает следующй слайд*/
// function plusSlide() {
//   showSlides((slideIndex += 1));
// }
// /* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
// function minusSlide() {
//   showSlides((slideIndex -= 1));
// }
// /* Устанавливает текущий слайд */
// function currentSlide(n) {
//   showSlides((slideIndex = n));
// }
// /* Основная функция слайдера */
// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("item");
//   var dots = document.getElementsByClassName("slider-dots_item");
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";
// }
//
//
//
//
//
//
// var liIndex = 1;
// showLi(liIndex);
// function currentLi(n) {
//   showLi((liIndex = n));
// }
// /* Основная функция слайдера */
// function showLi(n) {
//   let i;
//   let slides = document.getElementsByClassName(
//     "investor-portfolio__about-item"
//   );
//   let dots = document.getElementsByClassName("investor-portfolio__firms-item");
//   if (n > slides.length) {
//     liIndex = 1;
//   }
//   if (n < 1) {
//     liIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active-item", "");
//   }
//   slides[liIndex - 1].style.display = "block";
//   dots[liIndex - 1].className += " active-item";
// }
// $(document).ready(function() {
//   $(".investor-portfolio__firms").on("click", "a", function(event) {
//     event.preventDefault();
//     var id = $(this).attr("href"),
//       top = $(id).offset().top;
//     $("body,html").animate({ scrollTop: top }, 1000);
//   });
// });