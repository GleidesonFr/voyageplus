const images = [
    '/img/manuel-moreno-DGa0LQ0yDPc-unsplash.jpg',
    '/img/matt-nelson-aI3EBLvcyu4-unsplash.jpg',
    '/img/luca-bravo-O453M2Liufs-unsplash.jpg'
];

const bgImage = document.getElementById('background-image');
const cards = document.querySelectorAll('#cards');

cards.forEach((box, index) => {
    
    box.addEventListener('mouseenter', () => {
        bgImage.src = images[index];
        bgImage.style.opacity = '1';
    });
  
    box.addEventListener('mouseleave', () => {
        bgImage.style.opacity = '0.5';
    });
  });
  