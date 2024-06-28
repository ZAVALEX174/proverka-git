var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    slidesPerView: 4,
    grabCursor: true,
    shortSwipes: false,
    slidesPerGroup: 1,

    breakpoints: {
        320: {
            // slidesPerView: 1,
            slidesPerView: "auto",
            freeMode: false,
            loop: true,
            pagination: {
                el: '.mySwiper2__swiper-pagination',
                clickable: true,
                type: 'progressbar',
            },
        },
        // when window width is >= 999px
        1000: {
            slidesPerView: 4,
        },

    },

    freeMode: false,
    watchSlidesProgress: true,
    navigation: {
        nextEl: ".mySwiper2__swiper-button-next",
        prevEl: ".mySwiper2__swiper-button-prev",
    },
});

$(document).ready(function () {
    if ($(window).width() >= 500) {

var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 0,
    slidesPerView: 1,
    grabCursor: true,
    freeMode: false,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
    pagination: {
        el: '.mySwiper2__swiper-pagination',
        clickable: true,
        type: 'progressbar',
    },

    effect: "creative",
    loopedSlides: 2,
    creativeEffect: {
        limitProgress: 2,
        prev: {
            translate: ["-100%", 0, 0],
            opacity: 0.3,
            scale: .75
        },
        next: {
            translate: ["100%", 0, 0],
            opacity: 0.3,
            scale: .75
        }
    },
    speed: 1500,
});

    }
})