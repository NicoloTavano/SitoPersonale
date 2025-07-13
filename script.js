  document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const menu = document.getElementById('menu');
    const modal = document.getElementById('galleryModal');
    const modalImg = document.getElementById('modalImg');

    // Toggle menu mobile
    burger.addEventListener('click', (e) => {
      e.stopPropagation();
      menu.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (!menu.contains(e.target) && !burger.contains(e.target)) {
        menu.classList.remove('active');
      }
    });

    document.querySelectorAll('#menu a').forEach(link => {
      link.addEventListener('click', () => {
        setTimeout(() => menu.classList.remove('active'), 500);
      });
    });

    // Galleria modale
    window.openGallery = (imgSrc) => {
      modalImg.src = imgSrc;
      modalImg.classList.remove('zoomed');
      modal.classList.add('show');
    };

    window.closeGallery = (e) => {
      if (e.target.classList.contains('modal-overlay') || e.target.classList.contains('close')) {
        modal.classList.remove('show');
        modalImg.classList.remove('zoomed');
      }
    };

    modalImg.addEventListener('click', () => {
      if (window.innerWidth > 768) {
        modalImg.classList.toggle('zoomed');
      }
    });
  });