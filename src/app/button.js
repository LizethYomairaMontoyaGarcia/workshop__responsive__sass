
  
  /* Botones desplegables*/

  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    
  }
  // Cierra el menú desplegable si el usuario hace clic fuera de él.
  window.onclick = function (e) {
    console.log("evento del boton ")
    if (!e.target.matches(".header__dropbtn")) {
        console.log("dentro del if")
      let dropdowns = document.getElementsByClassName("header__dropdown-content");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        const openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          //openDropdown.classList.remove("show");
        }
      }
    }
  };
  