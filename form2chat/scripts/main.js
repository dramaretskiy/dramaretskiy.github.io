"use strict";var menu=document.querySelector(".main-navigation"),openMenuButton=document.querySelector(".main-navigation__button"),closeMenuButton=document.querySelector(".main-navigation__close-button");openMenuButton.addEventListener("click",function(n){menu.classList.add("main-navigation--active")}),closeMenuButton.addEventListener("click",function(n){menu.classList.remove("main-navigation--active")});