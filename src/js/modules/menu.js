module.exports = function () {

  // begin menu
  $('#burger__input').on('click', function () {
    $('#header__menu').toggleClass('active');
  });

  $('.header__menu-link').on('click', function () {
    $('#header__menu').removeClass('active');
  });

  $('.profile-header__user-arrow').on('click', function () {
    $('#profile-header__user-menu').slideToggle();
  });
  // end menu

};