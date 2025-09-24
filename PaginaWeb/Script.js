const img = document.querySelector('.Introduccion img');
const tabButtons = document.querySelectorAll('.Boton');
const tabPanels = document.querySelectorAll('.tab-panel');

// Imagen
const modal = document.createElement('div');
modal.style.position = 'fixed';
modal.style.top = 0;
modal.style.left = 0;
modal.style.width = '100vw';
modal.style.height = '100vh';
modal.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
modal.style.display = 'flex';
modal.style.justifyContent = 'center';
modal.style.alignItems = 'center';
modal.style.cursor = 'pointer';
modal.style.visibility = 'hidden';
modal.style.opacity = 0;
modal.style.transition = 'opacity 0.3s ease';

const modalImg = document.createElement('img');
modalImg.style.maxWidth = '90%';
modalImg.style.maxHeight = '90%';
modalImg.style.borderRadius = '20px';
modalImg.style.boxShadow = '0 0 20px rgba(0,0,0,0.8)';
modalImg.style.cursor = 'default';

modal.appendChild(modalImg);

document.body.appendChild(modal);

img.style.transition = 'transform 0.3s ease';
img.addEventListener('mouseenter', () => {
    img.style.transform = 'scale(1.1)';
});
img.addEventListener('mouseleave', () => {
    img.style.transform = 'scale(1)';
});

img.addEventListener('click', () => {
    modalImg.src = img.src;
    modal.style.visibility = 'visible';
    modal.style.opacity = 1;
});


modal.addEventListener('click', () => {
    modal.style.opacity = 0;
    setTimeout(() => {
        modal.style.visibility = 'hidden';
    }, 300);
});
// Fin Imagen

//Secciones//
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tab = button.getAttribute('data-tab');

        // Cambiar active en botones
        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Cambiar active en paneles
        tabPanels.forEach(panel => {
            if (panel.getAttribute('data-tab') === tab) {
                panel.classList.add('active');
            } else {
                panel.classList.remove('active');
            }
        });
    });
});
// Fin Secciones