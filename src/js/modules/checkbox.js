module.exports = function() {

  // begin checkbox
  $('.checkbox input').on('click', function () {
    $(this).parents('.checkbox').toggleClass('active');
  });
  // end checkbox

};