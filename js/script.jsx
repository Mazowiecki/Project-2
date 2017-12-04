require('../sass/style.scss');

$(document).ready(function(){


    let swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        initialSlide: 1,
        grabCursor: true,
        pagination: '.swiper-pagination',
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 0,
            stretch: 45,
            depth: 60,
            modifier: 2,
            slideShadows: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });


});