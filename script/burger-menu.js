const openBurgerBtn = document.querySelector('.header__burger_open');
const closeBurgerBtn = document.querySelector('.btn__burger-close');
const burgerModal = document.querySelector('.burger-menu');
const linksBtn = document.querySelector('.navigation__link');

openBurgerBtn.addEventListener('click', () => {
    burgerModal.style.left = '0';
    document.body.style.overflow = "hidden";
});

closeBurgerBtn.addEventListener('click', () => {
    burgerModal.style.left = '-100%';
    document.body.style.overflow = "";
})

// linksBtn.addEventListener('click', () => {
//     burgerModal.style.left = '-100%';
//
// })

$('.navigation__link').click(function() {
    burgerModal.style.left = '-100%';
});