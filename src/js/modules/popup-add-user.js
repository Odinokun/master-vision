module.exports = function() {

  // begin popup add user
  $('.popup-discussion__user-btn').on('click', function() {
    var user = $(this).parents('.popup-discussion__user');
    $(user).toggleClass('active');
  });
  // end popup add user

};