/* Cuando el usuario hace clic en el botón,
        alternar entre ocultar y mostrar el contenido desplegable */
        function myFunction() {
            document.getElementById("myDropdown").classList.toggle("show");
          }
          // Cierra el menú desplegable si el usuario hace clic fuera de él.
          window.onclick = function(event) {
            if (!event.target.matches('.dropbtn')) {
              var dropdowns = document.getElementsByClassName("dropdown-content");
              var i;
              for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                  openDropdown.classList.remove('show');
                }
              }
            }
          }

// Cuando se hace clic en una categoría
$('.itemcategoria').click(function() {
    var categoria = $(this).attr('category');
  
    // Ocultar todos los elementos que no sean modales
    $('.Pcaj:not(.modal-container)').hide();
  
    // Mostrar solo los elementos de la categoría seleccionada
    $('.Pcaj[category="' + categoria + '"]').show();
  });
  
  // Cuando se hace clic en "Mostrar todo"
  $('.itemcategoria[category="all"]').click(function() {
    // Mostrar todos los elementos que no sean modales
    $('.Pcaj:not(.modal-container)').show();
  });