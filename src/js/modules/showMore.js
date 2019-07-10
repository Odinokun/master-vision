module.exports = function () {

  // begin showMore
  $('.profile-top__show-more-open').on('click', function () {
    $('.profile-top__show-more-open').fadeOut(0);
    $('.profile-top__show-more-close').fadeIn(0);
    $('#profile-all-info').slideDown();
  });

  $('.profile-all-info__close, .profile-top__show-more-close').on('click', function () {
    $('#profile-all-info').slideUp();
    $('.profile-top__show-more-close').fadeOut(0);
    $('.profile-top__show-more-open').fadeIn(0);
  });
  // end showMore

};