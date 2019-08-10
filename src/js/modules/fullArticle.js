module.exports = function() {

  // begin full article open
  $('.profile-article__body-more,' +
    '.profile-article__body-unmore').on('click', function(e) {
    e.preventDefault();
    var article = $(this).parents('.profile-article__body');

    $(article).children('.profile-article__body-more').fadeToggle();
    $(article).children('.profile-article__body-full').slideToggle();
  });
  // end full article open

};