// BtnsSlide = document.querySelectorAll('.layouts__swiper-slide');
//
//
// BtnsSlide.addEventListener('click', ()=> {
//     Fancybox.show($('.swiper-slide[data-num=""]'))
// })


$(document).ready(function () {
    if ($(window).width() <= 500) {

        $('.layouts__swiper-slide').click(function() {
            var id = $(this).data('num');

            Fancybox.show([{ src: '#slide'+ id +'', type: "clone" }]);
        });

    }
})