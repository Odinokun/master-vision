module.exports = function() {

  // begin radio
  $('.profile-edit__form-decor-radio').on('click', function () {
    $('.profile-edit__form-decor-radio').parents('label').removeClass('active');
    $('.profile-edit__form-decor-radio').parents('.profile-edit__form-decor-item').removeClass('active');
    $(this).parents('label').addClass('active');
    $(this).parents('.profile-edit__form-decor-item').addClass('active');
  });
  // end radio

};