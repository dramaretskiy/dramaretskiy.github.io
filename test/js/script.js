var btn = document.querySelector(".main__navigation-button--login");
var menu = document.querySelector(".main__navigation-button--login > .dropdown__menu");

btn.addEventListener("mouseover", function(event) {
  if (event) {
    menu.classList.add("active");
  }
});

btn.addEventListener("mouseout", function(event) {
  if (event) {
    menu.classList.remove("active");
  }
});