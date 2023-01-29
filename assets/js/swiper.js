import Swiper, { Navigation, Pagination } from 'swiper';

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

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    enabled: false,
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },

  breakpoints: {
    1024: {
        slidesPerView: 4,
        spaceBetween: 50,
        freeMode: false,
        navigation: {
            enabled: true,
        }
    }
  }
});
