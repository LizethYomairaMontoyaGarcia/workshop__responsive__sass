/* Botones desplegables*/

function myFunction(idButton) {
  document.getElementById(idButton).classList.toggle("show");
}
// Cierra el menú desplegable si el usuario hace clic fuera de él.
window.onclick = function (e) {
  console.log("evento del boton ");
  //matches indica que coincida las class
  if (!e.target.matches(".header__dropbtn__feature")) {
    closeDropdown("header__dropdown__feature");

  } else if (!e.target.matches(".header__dropbtn__company")) {
    closeDropdown("header__dropdown__company");
  }
};

function closeDropdown(nameDropdown) {
  let dropdowns = document.getElementsByClassName(nameDropdown);
  console.log("open del dropw", dropdowns);
  let i;
  for (i = 0; i < dropdowns.length; i++) {
    const openDropdown = dropdowns[i];
    console.log("open del dropw", openDropdown);
    if (openDropdown.classList.contains("show")) {
      openDropdown.classList.remove("show");
    }
  }
}
