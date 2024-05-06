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