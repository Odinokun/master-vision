module.exports = function () {

  // begin tags
  $('.profile-article__tags-item--arrow').on('click', function () {
    $(this).toggleClass('active');
    var par = $(this).parents('.profile-article__tags-list');
    $(par).children('.profile-article__tags-item.hidden').slideToggle();
  });
  // end tags

};