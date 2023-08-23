document.addEventListener('DOMContentLoaded', function() {
    const modalButtons = document.querySelectorAll('.modal-button');
    const closeModalBtns = document.querySelectorAll('.close-ModalBtn');
    const modalContainers = document.querySelectorAll('.modal-container');
  
    modalButtons.forEach(button => {
      button.addEventListener('click', function() {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.style.display = 'flex';
      });
    });
  
    modalContainers.forEach(container => {
      container.addEventListener('click', function(e) {
        if (e.target === container) {
          container.style.display = 'none';
        }
      });
    });
  });

const imagenesHover = document.querySelectorAll('.imagen-hover');
const ventanasFlotantes = document.querySelectorAll('.ventana-flotante');

imagenesHover.forEach((imagen, index) => {
    imagen.addEventListener('mouseenter', () => {
        ventanasFlotantes[index].style.display = 'block';
    });

    imagen.addEventListener('mouseleave', () => {
        ventanasFlotantes[index].style.display = 'none';
    });
});