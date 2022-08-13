const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

const dropLink = document.querySelector('.dropdown__item-list');
const dropdown = document.querySelector('.menu__block-dropdown');

dropLink.addEventListener('mouseover', () =>{
  dropdown.classList.add('dropdown--active')
})

dropLink.addEventListener('mouseout', () =>{
    dropdown.classList.remove('dropdown--active')
})

const burgerBtn = document.querySelector('.burger__btn');
const mobileMenu = document.querySelector('.header__mobile-menu');
const closeBtn = document.querySelector('.close');

burgerBtn.addEventListener('click', () =>{
  mobileMenu.classList.add('header__mobile-menu--active');
})
closeBtn.addEventListener('click', () =>{
  mobileMenu.classList.remove('header__mobile-menu--active');
})