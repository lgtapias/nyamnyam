document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector('.carousel-inner');
    const carouselItems = document.querySelectorAll('.carousel-item');
    let totalItems = carouselItems.length;
    let currentIndex = 0;
    function moveToNextSlide() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    }
    function updateCarousel() {
        const offset = -currentIndex * 100 / totalItems;
        carousel.style.transform = `translateX(${offset}%)`;
    }
    setInterval(moveToNextSlide, 3000); // Canvia de slide cada 3 segons
    // Per assegurar que totes les imatges es carreguen correctament
    window.addEventListener('load', function() {
        carouselItems.forEach((item, index)=>{
            const img = item.querySelector('img');
            if (!img.complete) img.onload = ()=>{
                if (index === totalItems - 1) updateCarousel();
            };
            else if (index === totalItems - 1) updateCarousel();
        });
    });
});

//# sourceMappingURL=recipes.f68744d1.js.map
