const heroSlider = new Swiper('.hero__swiper', {
    loop: true,
    speed: 1500,
    effect: "fade",
    pagination: {
        el: '.hero__swiper-pagination',
        // dynamicBullets: true,
        clickable: true,
        type: 'progressbar',
    },

    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },

}
);

