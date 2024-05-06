/*menu*/
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




$(document).ready(function(){
  // lightbox
  $('ul#gallery a').on('click', function(event){
    event.preventDefault();
    let link = $(this).find('img').attr('src');
    $('.gallery img').attr('src', '');
    $('.gallery img').attr('src', link);
    $('.gallery').fadeIn('slow');
  });
  // close lightbox
  $('.gallery').on('click', function(event){
    event.preventDefault();
    $('.gallery').fadeOut('slow');
  });
});





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


