//*menu*/
(function() {
  'use strict';

  let $menu = $(".menu a"),
      $overlay = $(".menu-overlay"),
      $closeBtn = $(".close-form"),
      $closeMenu = $(".close-form a"),
      settings = {
        class: "is-active"
      };

  function openMenu (e) {
      $overlay.toggleClass(settings.class);
      $closeBtn.toggleClass(settings.class);
      e.preventDefault();
  }

  function closeMenu (e) {
    $overlay.toggleClass(settings.class);
    $closeBtn.toggleClass(settings.class);
    e.preventDefault();
  }

  $menu.on('click', openMenu);

  $closeMenu.on('click', closeMenu);
})();






/*swiper*/

// Params
var sliderSelector = '.swiper-container',
    options = {
      init: false,
      loop: true,
      speed:800,
      slidesPerView: 2, // or 'auto'
      // spaceBetween: 10,
      centeredSlides : true,
      effect: 'coverflow', // 'cube', 'fade', 'coverflow',
      coverflowEffect: {
        
        
  
        rotate: 50, // Slide rotate in degrees
        stretch: 0, // Stretch space between slides (in px)
        depth: 100, // Depth offset in px (slides translate in Z axis)
        modifier: 1, // Effect multipler
        slideShadows : true, // Enables slides shadows
      },
      grabCursor: true,
      parallax: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        1023: {
          slidesPerView: 1,
          spaceBetween: 0
        }
      },
      // Events
      on: {
        imagesReady: function(){
          this.el.classList.remove('loading');
        }
      }
    };
var mySwiper = new Swiper(sliderSelector, options);

// Initialize slider
mySwiper.init();




/*up*/
(function() {
  const scrollBtt = document.querySelector(".btt");
  const bttVisibility = () => {
    if (window.scrollY > 400) {
        scrollBtt.style.visibility = "visible";
    } else {
        scrollBtt.style.visibility = "hidden";
    }
};
document.addEventListener("scroll", () => {
  bttVisibility();
});
scrollBtt.addEventListener("click", () => {
  window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
});




  
})();