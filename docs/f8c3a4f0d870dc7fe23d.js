import "../styles/indexStyles/styles.css";
import "../index.html";
function classToggle() {
  console.log("class despliegue");
  var items = document.querySelectorAll(".nav__items");
  //seteando una nueva clase al elemnto
  items.forEach(function (item) {
    return item.classList.toggle("nav__toggle__show");
  });
}
var menu = document.querySelector(".header__imgDropdown");
menu.addEventListener("click", classToggle);