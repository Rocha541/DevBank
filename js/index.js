
const swiper1 = new Swiper('.swiper1', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next1',
    prevEl: '.swiper-button-prev1',
  },
  breakpoints: {
       
    640:{
         slidesPerView: 1,
          spaceBetween: 18,

    },

      920: {
          slidesPerView: 2,
          spaceBetween: 18,
          
      },
      1188: {
          slidesPerView: 3,
          spaceBetween: 24
      },
  }
});

const swiper2 = new Swiper('.swiper2', {
  direction: 'horizontal', // Corrigindo erro de digitação
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next2',
    prevEl: '.swiper-button-prev2',
  },slidesPerView: 1, 
  spaceBetween: -5,
  
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 5,
      },
      960: {
        slidesPerView: 3,
        spaceBetween: 18,
      },
      1254: {
        slidesPerView: 4,
        spaceBetween: 18,
      }
    }
});


