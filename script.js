let currentIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    currentIndex = (currentIndex + direction + slides.length) % slides.length;
    
    document.querySelector('.carousel').scrollTo({
        left: slides[currentIndex].offsetLeft,
        behavior: "smooth"
    });
}
