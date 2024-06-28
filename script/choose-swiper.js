const chooseSlider = new Swiper('.choose__swiper', {
        loop: true,
        speed: 1500,
        slidesPerView: 1.25,
        // spaceBetween: 5,
        // autoHeight: true,
        centeredSlides: true,
        centeredSlidesBounds: true,

        pagination: {
            el: '.choose__swiper-pagination',
            clickable: true,
            type: 'progressbar',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        effect: "creative",
        loopedSlides:2,
        creativeEffect: {
            limitProgress: 2,
            prev: {
                translate: ["-100vw", 0, 0],
                opacity: 0,
                scale: 0
            },
            next: {
                translate: ["65%", 0, 0],
                opacity: 1, //0.4
                scale: 1,
            }
        },

        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
                freeMode: true,
                effect: "creative",
                // loopedSlides:2,
                creativeEffect: {
                    limitProgress: 2,
                    prev: {
                        translate: ["-100vw", 0, 0],
                        opacity: 0.7,
                        scale: 1
                    },
                    next: {
                        translate: ["100%", 0, 0],
                        opacity: 1, //0.4
                        scale: 1,
                    }
                },
            },
            1000: {


            },
        },


});

