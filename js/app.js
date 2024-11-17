const menuBar = document.querySelector(".menu");
const menu = document.querySelector(".navbar__items");

menuBar.onclick = function () {
  menu.classList.toggle("opened");
  console.log("Salom");
};
