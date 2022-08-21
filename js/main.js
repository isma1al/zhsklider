

window.onload = function() {
  $(function() {
    $('.licenses__inner').slick({
      infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    speed: 300,
    dots: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          
        },
      },
      {
        breakpoint: 600,
          settings: {
            slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
    })
  })
};

console.log(1);

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


const modal = document.querySelector('.modal');
const closemenuBtn = document.querySelector('.close__menu');
const modalBtn = document.querySelector('.post__documentation');

modalBtn.addEventListener('click', () =>{
  modal.classList.add('modal--active');
})
closemenuBtn.addEventListener('click', () =>{
  modal.classList.remove('modal--active');
})