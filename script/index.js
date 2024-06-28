$(document).ready(function () {
        Fancybox.bind('[data-fancybox]', {
        // Your custom options
    });

    $('.phone').inputmask({
        mask: '+7 (*{1}99) 999-99-99',
        placeholder: "+7 (___) ___-__-__",
        definitions: {
            '*': {
                validator: "[0-6,9]"
            }
        }
    });

    $('.modal__btn-sub').click(function() {
        Fancybox.close()
    });
})