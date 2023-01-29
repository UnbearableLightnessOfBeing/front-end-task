// import Swiper JS
import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const swiper = new Swiper('.swiper', {

    modules: [Pagination, Navigation],

  direction: 'horizontal',
  loop: false,
  freeMode: true,
  slidesPerView: 2.3, 
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});