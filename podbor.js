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





/*modal*/

(function() {
  $( document ).ready(function() {
    $('.trigger').on('click', function() {
      const id = $(this).closest('.box').find('p').attr('id');
      const modalWrapper = $('#' + id + '-modal-wrapper');
      const content = $('#' + id + '-content');
      modalWrapper.toggleClass('open');
      content.toggleClass('open');
      $('.page-wrapper').toggleClass('blur-it');
      return false;
    });

    // Add this event listener
    $('.modal-wrapper').on('click', function() {
      const modalWrapper = $(this);
      const content = modalWrapper.find('.content');
      modalWrapper.toggleClass('open');
      content.toggleClass('open');
      $('.page-wrapper').toggleClass('blur-it');
    });
  });
})();

