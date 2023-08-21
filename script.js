let searchform = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchform.classList.toggle('active');
    loginnow.classList.remove('active');
    shoppingcart.classList.remove('active');
}

let shoppingcart = document.querySelector('.shopping-cart');

document.querySelector('#shopping-btn').onclick = () => {
    shoppingcart.classList.toggle('active');
    loginnow.classList.remove('active');
    searchform.classList.remove('active');
}

let loginnow = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () => {
    loginnow.classList.toggle('active');
    shoppingcart.classList.remove('active');
    searchform.classList.remove('active');
}


window.onscroll = () => {
    loginnow.classList.remove('active');
    shoppingcart.classList.remove('active');
    searchform.classList.remove('active');
}




var swiper = new Swiper(".product-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOninteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });






  var swiper = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOninteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });
