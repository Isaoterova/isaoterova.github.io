const slides = document.querySelectorAll('.carousel-slide img');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
//Carrusel de imagenes
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
    currentIndex = index;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => showSlide(index));
});

setInterval(nextSlide, 3000);

showSlide(currentIndex);

