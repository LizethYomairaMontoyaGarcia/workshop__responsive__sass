
  
  /* Botones desplegables*/
  function myFunction() {
      console.log("esta es la funcion");
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
  };
  