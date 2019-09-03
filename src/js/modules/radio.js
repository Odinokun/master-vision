module.exports = function() {

  // begin radio
  $('.profile-edit__form-decor-radio').on('click', function () {
    $('.profile-edit__form-decor-radio').parents('label').removeClass('active');
    $('.profile-edit__form-decor-radio').parents('.profile-edit__form-decor-item').removeClass('active');
    $(this).parents('label').addClass('active');
    $(this).parents('.profile-edit__form-decor-item').addClass('active');
  });

  $('.profile-edit__radio-row-label').on('click', function () {
    $('.profile-edit__radio-row-label').removeClass('active');
    $(this).addClass('active');
  });

  $('.my-course-homework__item-radio').on('click', function () {
    var radioParent = $(this).parents('.my-course-homework__item-radiolist');
    $(radioParent).children('.my-course-homework__item-radio').removeClass('active');
    $(this).addClass('active');
  });

  $('.profile-balance__radio-item').on('click', function () {
    $('.profile-balance__radio-item').removeClass('active');
    $(this).addClass('active');
  });
  // end radio

};