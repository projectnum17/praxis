'use strict';
document.addEventListener('DOMContentLoaded', () => {
    const descriptions = document.querySelectorAll(
        '.gallery__cards-items .description'
    );

    if (descriptions.length > 0) {
        descriptions.forEach((description) => {
            const originalText = description.textContent;

            if (originalText.length > 100) {
                const trimmedText = originalText.slice(0, 250) + '...';
                description.textContent = trimmedText;
            }
        });
    }

    const mainPageHeroSlider = new Swiper('.hero__preview', {
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        loop: true,
        speed: 1500,
        autoplay: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        },
    });
    
    mainPageHeroSlider.slides.forEach((slide) => {
        slide.addEventListener('click', () => {
            mainPageHeroSlider.slideNext();
        });
    });
    
    const mainPageShowCaseSlider = new Swiper('.gallery__showcase', {
        spaceBetween: 20,
        loop: true,
        speed: 3000,
        autoplay: true,
        autoplay: {
            delay: 2000,
        },
        allowTouchMove: false,
        slidesPerView: 2.2,
    });
    
    const mainPageCardsSlider = new Swiper('.gallery__cards-items', {
        spaceBetween: 20,
        grabCursor: true,
        loop: true,
        speed: 3000,
        slidesPerView: 3.2,
        navigation: {
            nextEl: '.gallery__cards .btn--next',
            prevEl: '.gallery__cards .btn--prev',
        },
    });
});