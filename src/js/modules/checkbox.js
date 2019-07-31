module.exports = function() {

  // begin checkbox
  $('.checkbox input').on('click', function () {
    $(this).parents('.checkbox').toggleClass('active');
  });

  $('.my-course-homework__item-checkbox input').on('click', function () {
    $(this).parents('.my-course-homework__item-checkbox').toggleClass('active');
  });
  // end checkbox

};