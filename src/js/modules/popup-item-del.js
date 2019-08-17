module.exports = function () {

  // begin popup item delete
  $('.profile-header-popup__close').on('click', function () {
    $(this).parents('.profile-header-popup__item').fadeOut();
  });
  // end popup item delete

};