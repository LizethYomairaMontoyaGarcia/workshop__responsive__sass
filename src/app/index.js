import "../styles/indexStyles/styles.css";
import "../index.html";

function classToggle() {
    console.log("class despliegue")
  const items = document.querySelectorAll(".nav__items");
  //seteando una nueva clase al elemnto
  items.forEach((item) => item.classList.toggle("nav__toggle__show"));
}
const menu = document.querySelector(".header__imgDropdown");
menu.addEventListener("click", classToggle);






