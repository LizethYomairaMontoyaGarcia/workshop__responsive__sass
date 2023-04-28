import "../styles/indexStyles/styles.css";
import "../index.html";

function classToggle() {
  const items = document.querySelectorAll(".nav__items");
  //seteando una nueva clase al elemnto
  items.forEach((item) => item.classList.toggle("nav__toggle__show"));
}
const menu = document.querySelector(".header__imgDropdown");
menu.addEventListener("onclick", classToggle);

/* Botones desplegables*/
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
// Cierra el menú desplegable si el usuario hace clic fuera de él.
window.onclick = function (e) {
  if (!e.target.matches(".header__dropbtn")) {
    let dropdowns = document.getElementsByClassName("header__dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
  myFunction(e.target, onclick);
};
