"use strict";var menu=document.querySelector(".main-navigation"),openMenuButton=document.querySelector(".main-navigation__button"),closeMenuButton=document.querySelector(".main-navigation__close-button");openMenuButton.addEventListener("click",function(n){menu.classList.add("main-navigation--active")}),closeMenuButton.addEventListener("click",function(n){menu.classList.remove("main-navigation--active")});var $page=$("html, body");$('a[href*="#"]').click(function(){return $page.animate({scrollTop:$($.attr(this,"href")).offset().top},600),!1});