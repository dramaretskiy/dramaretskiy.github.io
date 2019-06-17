var panelItem = document.querySelectorAll(".accordion-group-title"),
  bodyItem = document.querySelectorAll(".accordion-group-body");
panelItem.__proto__.forEach = [].__proto__.forEach;

var activePanel;
panelItem.forEach(function(item, i, panelItem) {
  item.addEventListener("click", function(e) {
    //show new thingy;
    this.classList.add("panel-active");
    this.nextElementSibling.classList.add("active");
    //hide old thingy
    if (activePanel) {
      activePanel.classList.remove("panel-active");
      activePanel.nextElementSibling.classList.remove("active");
    }
    //update thingy
    activePanel = activePanel === this ? 0 : this;
  });
});
